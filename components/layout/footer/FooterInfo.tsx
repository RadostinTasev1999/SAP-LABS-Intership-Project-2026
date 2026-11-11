import Link from "next/link"

import { FooterInfoProp } from '@/lib/definitions'

export default function FooterInfo({
    footerInfo
}: FooterInfoProp){

    return(
        <div className='flex flex-wrap justify-center gap-6'>
            {
                footerInfo.map((el) => (
                    <Link key={el.id} href='/'>
                        {el.text}
                    </Link>
                ))
            }
        </div>
    )
}