import Link from "next/link"

import {FooterColItemProp} from '@/lib/definitions'

export default function FooterColItem({
    name
}: FooterColItemProp){

    return(
        <li>
            <Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>
                {name}
            </Link>
        </li>
    )
}