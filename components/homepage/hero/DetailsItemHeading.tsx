import { DetailsItemHeadingProps } from '@/lib/definitions'

export default function DetailsItemHeading({
    Icon,
    heading
}: DetailsItemHeadingProps){

    return(
        <span
                    className="flex items-center gap-4"
                >
                    {/* Package icon */}
                    <span
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200"
                        aria-hidden="true"
                    >
                        {Icon}

                    </span>
                    <span className="flex flex-col gap-0.5">
                        <span>
                            {heading}
                        </span>
                    </span>
                </span>
    )
}