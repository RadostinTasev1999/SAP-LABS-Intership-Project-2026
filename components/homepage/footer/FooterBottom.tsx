
import FooterRights from './FooterRights'
import FooterInfo from './FooterInfo'

import { FooterBottomData } from '@/lib/definitions'

export default function FooterBottom({
    footerRights,
    footerInfo
}: FooterBottomData){

    return(
        <div className='pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400'>
            <FooterRights 
                footerRights={footerRights.text}
                />
            <FooterInfo 
                footerInfo={footerInfo}
                />
        </div>
    )
}