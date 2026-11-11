
import AboutSectionHeader from './AboutSectionHeader'
import AboutValuesGrid from './AboutValuesGrid'
import { HeroAboutProps } from '@/lib/definitions'

export default function HeroAbout({
    heroAboutData
}:HeroAboutProps){

    return(
        <section
            className="mx-auto space-y-8 px-4 py-24 md:px-6 max-w-[1400px]"
            >
         {/* Section Header */}
        <AboutSectionHeader 
            sectionHeader={heroAboutData.sectionHeader}
            />

         {/* Values Grid */}
         <AboutValuesGrid 
            valueCards={heroAboutData.valueCards}
            />
        </section>
    )
}