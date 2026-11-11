import Link from "next/link"
import {DesktopCtaProps} from '@/lib/definitions'

export default function DesktopCta({
    url,
    text
}: DesktopCtaProps){

    return(
        <div className="hidden lg:block">
            <Link href={url || "#"} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase px-6 py-3 rounded-full shadow-sm">
                {text}
            </Link>
        </div>
    )
}