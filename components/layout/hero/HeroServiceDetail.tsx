import DetailsItemHeading from './DetailsItemHeading'
import DetailsDescription from './DetailsDescription'

import {HeroServiceDetailProps} from '@/lib/definitions'

export default function HeroServiceDetail({
    Icon,
    heading,
    description,
    PlusIcon
}: HeroServiceDetailProps){

    return(
        <details
            className="group"
        >
            <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium outline-none transition-all"
            >
                {/* Details icon + heading */}
                <DetailsItemHeading 
                    Icon={Icon}
                    heading={heading}
                    />
                {/* Plus icon */}
                {PlusIcon}
            </summary>
            {/* Details description */}
            <DetailsDescription 
                description={description}
                />

        </details>
    )
}