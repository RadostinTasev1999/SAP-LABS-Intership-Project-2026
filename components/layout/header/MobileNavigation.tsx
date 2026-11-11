import MobileDrawerListItem from './MobileDrawerListItem'
import {MobileNavProps} from '@/lib/definitions'

export default function MobileNavigation({
    mobileDrawer
}: MobileNavProps){

    return(
        <nav className='flex-1 px-2 py-4'>
            <ul className='space-y-1'>
                
                {
                    mobileDrawer.map((el) => (
                        <MobileDrawerListItem 
                            key={el.id}
                            heading={el.heading}
                            icon={el.icon}
                            list={el.list}
                            url={el.url}
                            text={el.text}
                            />
                    ))
                }
            </ul>
        </nav>
    )
}