import Link from "next/link"
import ChevronIcon from "@/components/ui/ChevronIcon"

import { NavListItemProps } from "@/lib/definitions"

import NavDropdownItem from './NavDropdownItem'

export default function NavListItem({
    url,
    text,
    icon,
    dropDownMenu
}: NavListItemProps){

    return(
        <li className="relative group py-2">
            {/* Dropdown Trigger */}
            <Link href={url} className="inline-flex items-center gap-1 hover:text-blue-600">
                {text}
                {
                    icon === 'chevron' ? <ChevronIcon /> : ""
                }
            </Link>


            {/* Dropdown Card Container (Hidden until parent hover) */}
            {
                dropDownMenu && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50 border border-slate-200 backdrop-blur-md bg-white/90 w-64 rounded-3xl">
                        <div className="p-4">
                            <ul className="space-y-2 text-sm font-normal">
                                <li>
                                    {
                                        dropDownMenu.map((el) => (
                                            <NavDropdownItem
                                                key={el.id}
                                                url={el.url}
                                                text={el.text}
                                            />
                                        ))
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }

        </li>
    )
}