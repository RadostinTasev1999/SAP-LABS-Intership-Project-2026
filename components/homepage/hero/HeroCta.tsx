import Link from "next/link"
import ArrowRight from "@/components/ui/ArrowRight"
import PhoneIcon from "@/components/ui/PhoneIcon"

import {HeroCtaProps} from '@/lib/definitions'

export default function HeroCta({
    btnPrimary,
    btnSecondary
}: HeroCtaProps){

    return(
        <div className='mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row'>
            {/* Quote button */}
            <Link href={btnPrimary.url} className='inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-sky-700'>
                {btnPrimary.label}
                {btnPrimary.icon === 'arrow-right' ? <ArrowRight /> : ""} 
            </Link>
            {/* Phone button */}
            <Link href={btnSecondary.url} className='inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition-colors hover:bg-slate-100'>
                {btnSecondary.icon === "phone-icon" ? <PhoneIcon /> : ""} 
                {btnSecondary.label}
            </Link>
        </div>
    )
}