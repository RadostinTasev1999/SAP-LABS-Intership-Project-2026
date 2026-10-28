import {HeroLayoutTopProps} from '@/lib/definitions'

import HeroBadge from './HeroBadge'
import HeroHeading from './HeroHeading'
import HeroDescription from './HeroDescription'
import HeroCta from './HeroCta'
import HeroQuoteHeading from './HeroQuoteHeading'
import HeroQuoteParagraph from './HeroQuoteParagraph'
import HeroQuoteForm from './HeroQuoteForm'
import HeroSecNote from './HeroSecNote'

export default function HeroLayoutTop({
    badgeText,
    badgeType,
    headingPrimary,
    emphasis,
    headingSecondary,
    description,
    btnPrimary,
    btnSecondary,
    quoteHeading,
    quoteParagraph,
    pickupZip,
    deliveryZip,
    vehicleDetails,
    submitBtn,
    securityNote
}: HeroLayoutTopProps){

    return(
        <div
                className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 rounded-t-2xl border-b border-slate-400 bg-blue-50/90">
                {/* Left column: Hero-content */}

                <div className="flex flex-col items-start">
                    {/* Trust badge */}
                    <HeroBadge 
                        badgeText={badgeText}
                        badgeType={badgeType}
                        />
                    {/* Main Heading */}
                    <HeroHeading 
                        headingPrimary={headingPrimary}
                        emphasis={emphasis}
                        headingSecondary={headingSecondary}
                        />

                    {/* Description */}
                    <HeroDescription 
                        description={description}
                        />

                    {/* CTA links */}
                    <HeroCta 
                        btnPrimary={btnPrimary}
                        btnSecondary={btnSecondary}
                        />
                </div>
                {/* Right column: Quote form card */}

                <div
                    className='w-full p-6 sm:p-9'
                >
                    {/* Card heading */}
                    <HeroQuoteHeading 
                        quoteHeading={quoteHeading}
                        />

                    {/* Quote text */}
                    <HeroQuoteParagraph 
                        quoteParagraph={quoteParagraph}
                        />
                    {/* Quote form */}

                    <HeroQuoteForm 
                        pickupZip={pickupZip}
                        deliveryZip={deliveryZip}
                        vehicleDetails={vehicleDetails}
                        submitBtn={submitBtn}
                        />

                    {/* Security note */}
                    <HeroSecNote 
                        securityNote={securityNote}
                        />

                </div>
            </div>
    )
}