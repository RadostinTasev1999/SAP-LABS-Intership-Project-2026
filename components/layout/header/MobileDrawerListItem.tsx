import Link from "next/link"

import {MobileDrawerListData} from '@/lib/definitions'

import MobileDetailItem from './MobileDetailItem'


export default function MobileDrawerListItem({
    heading,
    icon,
    list,
    url,
    text
}: MobileDrawerListData){

    return(
        <li>
            {/*  */}
            
            {/* Menu Item 4: Direct Link */}
            
                {
                    url && text
                        ?
                    <Link href={url} className='block px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors'>
                        {text}
                    </Link>
                        :
                    <MobileDetailItem
                        heading={heading}
                        icon={icon}
                        list={list}
                            />
                }
                    
                
            
            
        </li>
    )
}