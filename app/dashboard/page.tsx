import AppHeader from "@/components/layout/header/Header"
import AppFooter from "@/components/layout/footer/Footer"
import QuoteOffer from '@/components/layout/dashboard/QuoteOffer'

// static data imports
import { footerGridData } from '@/lib/placeholderdata'
import { footerBottomData } from '@/lib/placeholderdata'


export default function Dashboard(){

    return(
        <>
            <AppHeader
                route="dashboard"
                />
            {/* -------- */}
            <QuoteOffer />
            {/* -------- */}
            <AppFooter 
                footerGridData={footerGridData}
                footerBottomData={footerBottomData}
                />
        </>
        
    )
}