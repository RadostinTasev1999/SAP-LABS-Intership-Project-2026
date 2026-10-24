import Link from "next/link"

export default function SystemMenu(){

    return(
        <section className="p-2">
            <h2 className="h-8 px-2 text-xs font-medium uppercase text-gray-500">
                System
            </h2>
            {/* Reports & Analytics */}
            <div className="w-full inline-flex gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3" /></svg>
                <Link href="#" className="">
                    Reports & Analytics
                </Link>
            </div>
            {/* Settings */}
            <div className="w-full inline-flex gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></g></svg>
                <Link href="#" className="">
                    Settings
                </Link>
            </div>
            {/* Help & Support */}
            <div className="w-full inline-flex gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" /></g></svg>
                <Link href="#" className="">
                    Help & Support
                </Link>
            </div>
        </section>
    )
}