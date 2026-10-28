import FooterColItem from './FooterColItem'

import { FooterGridColProps } from '@/lib/definitions'

export default function FooterGridCol({
    heading,
    items
}: FooterGridColProps){

    return(
        <div className='space-y-4'>
            <h4 className='text-sm font-semibold tracking-wider text-slate-600 uppercase'>{heading}</h4>
            <ul className='space-y-2.5 text-sm'>
                {
                    items.map((item) => (
                        <FooterColItem
                            key={item.id}
                            name={item.name}
                            />
                    ))
                }
            </ul>
        </div>
    )
}