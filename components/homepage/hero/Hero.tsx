import HeroBadge from './HeroBadge'
import HeroHeading from './HeroHeading'
import HeroDescription from './HeroDescription'
import HeroCta from './HeroCta'
import HeroQuoteHeading from './HeroQuoteHeading'
import HeroQuoteParagraph from './HeroQuoteParagraph'
import HeroQuoteForm from './HeroQuoteForm'
import HeroSecNote from './HeroSecNote'
import HeroCard from './HeroCard'

import {AppHeroProps} from '@/lib/definitions'
import { Separator } from '@/components/ui/separator'




export default function AppHero({
    appHeroProps
}: AppHeroProps){
    
    return(
        <section className="relative overflow-hidden py-6 mt-[96px]">
            {/* Heading & Quote Form */}
            <div
                className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 rounded-t-2xl border-b border-slate-400 bg-blue-50/90">
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
                    className='w-full p-6 sm:p-9'
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
            {/* Company Info Cards */}
            <div className='mx-auto flex flex-col sm:flex-row w-full max-w-7xl items-center justify-between px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 rounded-b-2xl  bg-blue-50/90'>
                <HeroCard />
            </div>

        </section>
    )
}