
import HeroLayoutTop from './HeroLayoutTop'
import HeroLayoutCards from './HeroLayoutCards'

import {AppHeroProps} from '@/lib/definitions'


export default function AppHero({
    appHeroProps,
    heroLayoutCardData
}: AppHeroProps){
    
    return(
        <section className="relative overflow-hidden py-6 mt-[96px]">
            {/* Heading & Quote Form */}
            <HeroLayoutTop 
                badgeText={appHeroProps.badgeText}
                badgeType={appHeroProps.badgeType}
                headingPrimary={appHeroProps.headingOne}
                emphasis={appHeroProps.emphasis}
                headingSecondary={appHeroProps.headingTwo}
                description={appHeroProps.description}
                btnPrimary={appHeroProps.btnPrimary}
                btnSecondary={appHeroProps.btnSecondary}
                quoteHeading={appHeroProps.quoteHeading}
                quoteParagraph={appHeroProps.quoteParagraph}
                pickupZip={appHeroProps.pickupZip}
                deliveryZip={appHeroProps.deliveryZip}
                vehicleDetails={appHeroProps.vehicleDetails}
                submitBtn={appHeroProps.submitBtn}
                securityNote={appHeroProps.securityNote}
                />
            {/* Company Info Cards */}
            <HeroLayoutCards 
                heroLayoutCardData={heroLayoutCardData}
                />

        </section>
    )
}