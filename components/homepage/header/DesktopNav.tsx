
import NavListItem from './NavListItem'

import {AppHeaderProps} from '@/lib/definitions'

export default function DesktopNav({
    navProps
}:AppHeaderProps){

    return(
        <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <ul className="flex items-center gap-6 font-semibold text-sm">
                {/* Home */}
                {
                   navProps && navProps.map((el) => {

                       return <NavListItem
                           key={el.id}
                           url={el.url}
                           text={el.text}
                           icon={el.icon}
                           dropDownMenu={el.dropDownMenu}
                       />
                   }

                    
                        
                    )
                }
            </ul>
        </nav>
    )
}