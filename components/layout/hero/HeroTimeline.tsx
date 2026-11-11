import HeroTimelineHeading from './HeroTimeLineHeading'
import HeroTimelineSteps from './HeroTimelineSteps'
import { HeroTimelineProps } from '@/lib/definitions'

export default function HeroTimeline({
    timelineHeading,
    timelineSteps
}: HeroTimelineProps){

    return(
        <section className="py-8 sm:py-16 lg:py-24 ">
            <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 sm:py-8 md:grid-cols-2 lg:px-8 backdrop-blur-md bg-blue-50/90 rounded-3xl">

            {/* Left Column: Sticky Header & Description */}
            {/* h-fit: height:fit-content */}
            <HeroTimelineHeading 
                badge={timelineHeading.badge}
                heading={timelineHeading.heading}
                text={timelineHeading.text}
                />
            {/* Right Column: Timeline Steps */}
            <HeroTimelineSteps 
                timelineSteps={timelineSteps}
                />

            </div>
        </section>
    )
}