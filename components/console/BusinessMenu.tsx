import Link from "next/link"

export default function BusinessMenu(){

    return(
        <section className="p-2">
            <h2 className="h-8 px-2 text-xs font-medium uppercase text-gray-500">
                Business
            </h2>
            {/* Quotes & Orders */}
            <div className="w-full inline-flex gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" /></g></svg>
                <Link href="#" className="">
                    Quotes & Orders
                </Link>
            </div>
            {/* Invoices & Payments */}
            <div className="w-full inline-flex gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M19 21H7a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13c0 1.657.343 3 2 3" /><path stroke-linejoin="round" d="M21 10a2 2 0 0 0-2-2h-2v10.5c0 1.38.62 2.5 2 2.5s2-1.12 2-2.5z" /><path d="M13 11H7m6-4H7m3 8H7" /></g></svg>
                <Link href="#" className="">
                    Invoices & Payments
                </Link>
            </div>
            {/* Documents */}
            <div className="w-full inline-flex gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9" /></svg>
                <Link href="#" className="">
                    Documents
                </Link>
            </div>
        </section>
    )
}