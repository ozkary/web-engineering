
export enum InvoiceStatus {
    Pending = 'pending',
    Paid = 'paid',
}

// Use interface when: 
//      You need to extend an existing interface.
//      You want to create intersection types.
export interface Invoice {
    id?: string;
    customerId: string;
    amountInCents: number;
    date?: string;        
    status: 'pending' | 'paid';
};

// This is temporary until @types/react-dom is updated
export interface InvoiceFormState {
    success?: boolean;
    errors?: {
      customerId?: string[];
      email?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
    data?: Invoice;
};
