import Link from "next/link"

import {MobileDrawerItemProps} from '@/lib/definitions'

export default function MobileDrawerItems({
    url,
    text
}: MobileDrawerItemProps) {

    return(
        <li>
            <Link href={url} className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
               {text}
            </Link>
        </li>
    )
}