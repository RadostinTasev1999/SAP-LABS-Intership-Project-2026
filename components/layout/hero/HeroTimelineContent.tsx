import { HeroTimelineContentProps } from '@/lib/definitions'

export default function HeroTimelineContent({
    heading,
    text
}: HeroTimelineContentProps){

    return(
        <div className="w-full px-8 pt-2 md:flex md:flex-1 mb-43.5">
            <div className="space-y-2.5">
                <h3 className="text-2xl font-semibold">
                    {heading}
                </h3>
                <p className="text-base">
                    {text}
                </p>
            </div>

        </div>
    )
}