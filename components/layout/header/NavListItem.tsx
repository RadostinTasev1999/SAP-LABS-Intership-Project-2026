import Link from "next/link"
import ChevronIcon from "@/components/shared/icons/ChevronIcon"

import { NavListItemProps } from "@/lib/definitions"

import DropDownSingle from './DropDownSingle'
import DropDownDouble from './DropDownDouble'

export default function NavListItem({
    id,
    url,
    text,
    icon,
    dropDownSingle,
    dropDownDouble
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

            
            {/* DropDown Card container without Heading*/}
            {
                id !== 2 && dropDownSingle && (
                        <DropDownSingle 
                            dropDownSingle={dropDownSingle}
                            />
                )

            }
            {
                id === 2 && dropDownDouble && (
                    <DropDownDouble
                        dropDownDouble={dropDownDouble}
                        />
                )
            }
                    
                    
        </li>
    )
}