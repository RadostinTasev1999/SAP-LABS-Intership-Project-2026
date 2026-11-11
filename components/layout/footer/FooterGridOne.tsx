import Link from "next/link"

import {FooterGridOneProps} from '@/lib/definitions'

export default function FooterGridOne({
    Logo,
    description,
    social
}: FooterGridOneProps){

    return(
        <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <div className="flex items-center">
                {Logo}
            </div>
            {/* Description */}
            <p className='text-sm text-slate-400 leading-relaxed max-w-sm'>
                {description}
            </p>
            {/* Social icons */}
            <div className='flex flex-wrap pt-2'>

                {
                    social.map((el) => {
                        const Icon = <el.icon />
                        return (
                            <Link href='/' key={el.id} className='p-2'>
                                {Icon}
                            </Link>
                        )
                    }

                    )
                }
            </div>
        </div>
    )
}