import { Metadata } from "next";
import { Suspense } from 'react';

// pagination support
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';

import { lusitana } from '@/app/ui/fonts';
import { CustomerTableSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredCustomers, fetchCustomerPages } from "@/app/lib/data";

export const metadata: Metadata = {
  title: 'Customers ',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
   
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // total pages
  const totalPages = await fetchCustomerPages(query);
  const customers = await fetchFilteredCustomers(query, currentPage)

  return (
  <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />       
      </div>
       <Suspense key={query + currentPage} fallback={<CustomerTableSkeleton />}>
       <CustomersTable customers={customers} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );  
}