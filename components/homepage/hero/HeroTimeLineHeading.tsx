import { TimelineHeading } from '@/lib/definitions'

export default function HeroTimelineHeading({
    badge,
    heading,
    text
}: TimelineHeading){

    return(
        <div className="h-fit items-start md:sticky md:top-26">
            <div className="flex h-auto flex-col items-start gap-4">
                <span
                    className="inline-flex w-fit shrink-0 items-center justify-center overflow-hidden h-auto px-3 py-1 text-white bg-blue-600/90 text-sm font-medium rounded-full"
                >
                    {badge}
                </span>
                <h2
                    className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl"
                >
                    {heading}
                </h2>
                <p
                    className="text-xl"
                >
                    {text}
                </p>
            </div>

        </div>
    )
}