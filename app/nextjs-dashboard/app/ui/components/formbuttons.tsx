import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

/**
 * returns a create button with action route  
 * @param route the action route
 * @param label the button label
 * @returns the create button with the action route
 */
// use Destructuring with Type Annotations
export function CreateButton( {route, label = 'Create' }: { route: string; label?: string }) {  

  if (!route){
    return (<label>Missing route</label>);
  }

  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

/**
 * Returns the update button for a form
 * @param id
 * @returns a component with the update button and action route
 */
export function UpdateButton({ id }: { id: string }) {
  return (
    <Link      
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

// export function DeleteInvoice({ id }: { id: string }) {

//   const deleteInvoiceWithId = DeleteInvoice.bind(null, id);
  
//   return (
//     <form action={deleteInvoiceWithId}>
//       <button className="rounded-md border p-2 hover:bg-gray-100">
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-5" />
//       </button>
//     </form>
//   );
// }
