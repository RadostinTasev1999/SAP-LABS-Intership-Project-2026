import HeroTimelineCount from './HeroTimelineCount'
import HeroTimelineContent from './HeroTimelineContent'

import { HeroTimelineItemProps } from '@/lib/definitions'

export default function HeroTimelineItem({
    count,
    heading,
    text
}: HeroTimelineItemProps){

    return(
        <div className="flex items-start ">
            {/* Step Container */}
            
            {/* Count */}
            <HeroTimelineCount 
                count={count}
                />

            {/* Content */}
            <HeroTimelineContent 
                heading={heading}
                text={text}
                />
            
        </div>
    )
}