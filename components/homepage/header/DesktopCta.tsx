import Link from "next/link"

export default function DesktopCta(){

    return(
        <div className="hidden lg:block">
            <Link href='#' className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase px-6 py-3 rounded-full shadow-sm">
                Request a Quote
            </Link>
        </div>
    )
}