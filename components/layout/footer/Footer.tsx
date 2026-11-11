import FooterGrid from './FooterGrid'
import FooterBottom from './FooterBottom'

import { AppFooterProps } from '@/lib/definitions'


export default function AppFooter({
    footerGridData,
    footerBottomData
}: AppFooterProps){

    return(
        <footer className="text-slate-300 py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Grid */}
                <FooterGrid 
                    footerGridOne={footerGridData.footerGridOne}
                    footerGridCols={footerGridData.footerGridCols}
                    />

                {/* Bottom Footer Row */}
                <FooterBottom 
                    footerRights={footerBottomData.footerRights}
                    footerInfo={footerBottomData.footerInfo}
                    />
                
            </div>
        </footer>
    )
}