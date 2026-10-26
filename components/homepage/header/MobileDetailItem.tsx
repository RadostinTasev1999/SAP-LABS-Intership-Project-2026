import ChevronRight from "@/components/ui/ChevronRight"

import MobileDrawerItems from './MobileDrawerItems'

import {MobileDetailItemProps} from '@/lib/definitions'

export default function MobileDetailItem({
    heading,
    icon,
    list
}: MobileDetailItemProps){

    return(
        <details className='group'>
            <summary className='flex items-center justify-between px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors'>
                <span>{heading}</span>
                <span className='shrink-0 transition-transform duration-200 group-open:rotate-90'>
                    {
                        icon === 'chevron-right' && <ChevronRight className='w-4 h-4' />
                    }

                </span>
            </summary>
            <ul className='mt-1 pl-4 pr-2 space-y-1 border-l-2 border-gray-100 ml-3'>
                {
                    list && list.map((el) => (
                        <MobileDrawerItems
                            key={el.id}
                            url={el.url}
                            text={el.text}
                        />
                    ))
                }
            </ul>
        </details>
    )
}