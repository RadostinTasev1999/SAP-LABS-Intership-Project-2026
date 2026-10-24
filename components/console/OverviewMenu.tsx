import Link from "next/link"

export default function OverviewMenu(){

    return(
        <section className="p-2">
            <h2 className="h-8 px-2 text-xs font-medium uppercase text-gray-500">
                Overview
            </h2>
            <div className="w-full inline-flex gap-2 rounded-lg text-sm hover:bg-gray-200 px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></g></svg>
                <Link href="#" className="">
                    Dashboard
                </Link>
            </div>

        </section>
    )
}