
import { Underline } from 'lucide-react'
import NavListItem from './NavListItem'

import {AppHeaderProps} from '@/lib/definitions'

export default function DesktopNav({
    navProps
}: AppHeaderProps){

    return(
        <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <ul className="flex items-center gap-6 font-semibold text-sm">
                {/* Home */}
                {
                   navProps && navProps.map((el) => {

                    const dropDownSingle = el.dropDownSingle ? el.dropDownSingle : undefined
                    const dropDownDouble = el.dropDownDouble ? el.dropDownDouble : undefined

                       return <NavListItem
                                    key={el.id}
                                    id={el.id}
                                    url={el.url}
                                    text={el.text}
                                    icon={el.icon}
                                    dropDownSingle={dropDownSingle}
                                    dropDownDouble={dropDownDouble}
                                    />
                   }

                    
                        
                    )
                }
            </ul>
        </nav>
    )
}