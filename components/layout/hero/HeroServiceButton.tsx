import Link from "next/link"

import { HeroServiceBtnProps } from '@/lib/definitions'

export default function HeroServiceButton({
    url,
    link,
    Icon
}: HeroServiceBtnProps){

    return(
        <div className="mt-16">
            <Link href={url} className="inline-flex gap-1 items-center justify-center px-4 py-2 rounded-2xl bg-blue-600/50 text-base font-semibold">
                {link}
                {Icon}
            </Link>
        </div>
    )
}