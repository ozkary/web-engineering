'use server';
  
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { Invoice, InvoiceFormState } from './models';

// define the schema for validation
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.',
    }),
    amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),    
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.',
      }),
    date: z.string(),
});

const InvoiceSchema = FormSchema.omit({ id: true, date: true });
const invoicesPath = '/dashboard/invoices';

/**
 * Parse the invoice data from a request (form)
 * @param formData the form information
 * @param id optional id
 */
async function getInvoice(formData: FormData, id?: string): Promise<InvoiceFormState> {
    
    // server side validation
    const validatedFields = InvoiceSchema.safeParse({        
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),        
    });
    
   
    let state:InvoiceFormState = {};

    if (!validatedFields.success) {
        state.errors = validatedFields.error.flatten().fieldErrors;
        state.message = 'Missing Fields. Failed to Create Invoice.';        
    } else {
        // get the form data
        const { customerId, amount, status } = validatedFields.data;
        // save monetary values in cents (e.g., 1099 instead of 10.99), ylu eliminates the issue of floating-point errors
        const amountInCents = amount * 100;
        let invoiceData: Invoice = {
            customerId,
            amountInCents,
            status
        }
        state.data = invoiceData;
    }
       
    return state;
}

export async function createInvoice(prevState: InvoiceFormState, formData: FormData) {

    const invoice = await getInvoice(formData);

    if (!invoice.success || !invoice.data){
        
        const {message, errors} = invoice;
        return {
            errors,
            message
        }
    }
    
    const {customerId, amountInCents, status } = invoice.data;

    // convert the date
    const date = new Date().toISOString().split('T')[0];

    try{

        await sql`INSERT INTO invoices (customer_id, amount, status, date)
                VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;

        // reset the invoices cache so new data is fetched when loading the view    
        revalidatePath(invoicesPath);
        
        // redirect to the invoices list
        redirect(invoicesPath);

    } catch(err) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }    
  }

// Use Zod to update the expected types
// const UpdateInvoice = FormSchema.omit({ id: true, date: true });
  
export async function updateInvoice(id: string, prevState: InvoiceFormState, formData: FormData) {
  
  const invoice = await getInvoice(formData);

  if (!invoice.success || !invoice.data){
      
      const {message, errors} = invoice;
      return {
          errors,
          message
      }
  }
  
  const {customerId, amountInCents, status } = invoice.data;
 
  try {

        await sql`UPDATE invoices
                    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
                    WHERE id = ${id}
                `;
    
        revalidatePath(invoicesPath);
        redirect(invoicesPath);
    
    } catch (err) {    
        return { message: 'Database Error: Failed to Update Invoice.' };
    }

 
}

export async function deleteInvoice(id: string) {
    
    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`;
        revalidatePath(invoicesPath);
    } catch (err) {
        return { message: 'Database Error: Failed to Delete Invoice.' };
    }
    
}