import Link from "next/link"

export default function OperationsMenu() {
    return(
        <section className="p-2">
            <h2 className="h-8 px-2 text-xs font-semibold text-gray-500 uppercase">
                Operations
            </h2>
            {/* Vehicles */}
            <div className="w-full h-8 inline-flex font-normal gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 8l-2 2l-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10L3 8m4 6h.01M17 14h.01" /><rect width="18" height="8" x="3" y="10" rx="2" /><path d="M5 18v2m14-2v2" /></g></svg>
                <Link href="#" className="">
                    Vehicles
                </Link>
            </div>

            {/* Shipments */}
            <ul className="flex flex-col gap-1">
                <li>
                    <details open className="group/menu">
                        <summary className="flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100">
                            <div className="inline-flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7l8.7 5l8.7-5M12 22V12" /></g></svg>
                                Shipments
                            </div>
                            <span className="ml-auto transition-tranform group-open/menu:rotate-90">
                                ›
                            </span>
                        </summary>

                        <ul className="flex flex-col ml-5 border-l border-slate-300 pl-1">
                            <li className="hover:bg-slate-200 rounded-lg px-2">

                                <Link href="" className="block p-1 text-sm text-slate-900">All Shipments</Link>
                            </li>
                            <li className="hover:bg-slate-200 rounded-lg px-2">


                                <Link href="" className="block p-1 text-sm text-slate-900">Create Shipment</Link>
                            </li>
                            <li className="hover:bg-slate-200 rounded-lg px-2">


                                <Link href="" className="block p-1 text-sm text-slate-900">Live Tracking</Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>

            {/* Transport Planning */}
            <div className="w-full h-8 inline-flex font-normal gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 2v4m8-4v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></g></svg>
                <Link href="#" className="">
                    Transport Planning
                </Link>
            </div>
            {/* Customers */}
            <div className="w-full h-8 inline-flex font-normal gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.4 9.4 0 0 0 2.625.372a9.3 9.3 0 0 0 4.121-.952q.004-.086.004-.173a4.125 4.125 0 0 0-7.536-2.32M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0m8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0" /></svg>
                <Link href="#" className="">
                    Customers
                </Link>
            </div>
            {/* Drivers & Partners */}
            <div className="w-full h-8 inline-flex font-normal gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.9 17.9 0 0 0-3.213-9.193a2.06 2.06 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.6 48.6 0 0 0-10.026 0a1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                <Link href="#" className="">
                    Drivers & Partners
                </Link>
            </div>
        </section>
    )
}