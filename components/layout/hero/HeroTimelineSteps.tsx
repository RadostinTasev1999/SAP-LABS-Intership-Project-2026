import HeroTimelineLine from './HeroTimelineLine'
import HeroTimelineItem from './HeroTimelineItem'
import { HeroTimelineStepsProp } from '@/lib/definitions'

export default function HeroTimelineSteps({
    timelineSteps
}: HeroTimelineStepsProp){

    return(
        <div className="relative">

            {/* Step 01 */}
            {
                timelineSteps.map((el) => (
                    <HeroTimelineItem
                        key={el.id}
                        count={el.count}
                        heading={el.heading}
                        text={el.text}
                        />
                ))
            }
            
            {/* Vertical connecting Line Background */}
            <HeroTimelineLine />
        </div>
    )
}