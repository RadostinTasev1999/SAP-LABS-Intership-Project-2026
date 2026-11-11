import Link from "next/link"

import {NavListItemProps} from '@/lib/definitions'

export default function NavDropdownItem({
    url,
    text
}: NavListItemProps){

    return(
        <Link href={url} className="block py-1 px-2 text-gray-600 hover:text-blue-400">
            {text}
        </Link>
    )
}