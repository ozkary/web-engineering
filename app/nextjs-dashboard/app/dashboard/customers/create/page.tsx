import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/components/breadcrumbs';
 
export default async function Page() {  
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create a Customer',
            href: '/dashboard/customer/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}