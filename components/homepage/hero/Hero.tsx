import HeroBadge from './HeroBadge'
import HeroHeading from './HeroHeading'
import HeroDescription from './HeroDescription'
import HeroCta from './HeroCta'
import HeroQuoteHeading from './HeroQuoteHeading'
import HeroQuoteParagraph from './HeroQuoteParagraph'
import HeroQuoteForm from './HeroQuoteForm'
import HeroSecNote from './HeroSecNote'

import {AppHeroProps} from '@/lib/definitions'


export default function AppHero({
    appHeroProps
}: AppHeroProps){
    
    return(
        <section className="relative overflow-hidden backdrop-blur-md bg-white/30 py-16 sm:py-20 lg:py-24 mt-[96px]">
            <div
                className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                {/* Left column: Hero-content */}

                <div className="flex flex-col items-start">
                    {/* Trust badge */}
                    <HeroBadge 
                        badgeText={appHeroProps.badgeText}
                        badgeType={appHeroProps.badgeType}
                        />
                    {/* Main Heading */}
                    <HeroHeading 
                        headingPrimary={appHeroProps.headingOne}
                        emphasis={appHeroProps.emphasis}
                        headingSecondary={appHeroProps.headingTwo}
                        />

                    {/* Description */}
                    <HeroDescription 
                        description={appHeroProps.description}
                        />

                    {/* CTA links */}
                    <HeroCta 
                        btnPrimary={appHeroProps.btnPrimary}
                        btnSecondary={appHeroProps.btnSecondary}
                        />
                </div>
                {/* Right column: Quote form card */}

                <div
                    className='w-full rounded-2xl bg-white p-6 sm:p-9'
                >
                    {/* Card heading */}
                    <HeroQuoteHeading 
                        quoteHeading={appHeroProps.quoteHeading}
                        />

                    {/* Quote text */}
                    <HeroQuoteParagraph 
                        quoteParagraph={appHeroProps.quoteParagraph}
                        />
                    {/* Quote form */}

                    <HeroQuoteForm 
                        pickupZip={appHeroProps.pickupZip}
                        deliveryZip={appHeroProps.deliveryZip}
                        vehicleDetails={appHeroProps.vehicleDetails}
                        submitBtn={appHeroProps.submitBtn}
                        />

                    {/* Security note */}
                    <HeroSecNote 
                        securityNote={appHeroProps.securityNote}
                        />

                </div>
            </div>

        </section>
    )
}