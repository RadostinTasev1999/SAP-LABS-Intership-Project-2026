import Link from "next/link"
import ChevronRight from '@/components/ui/ChevronRight'
import DetailsDivider from '@/components/ui/DetailsDivider'
import SportCarIcon from '@/components/ui/SportCarIcon'
import SteeringWheelIcon from '@/components/ui/SteeringWheelIcon'
import TrailerIcon from '@/components/ui/TrailerIcon'
import MapMarkerDistanceIcon from '@/components/ui/MapMarkerDistance'

export default function HeroServiceInfo(){

    return(
        <section
            id="hero-service-info"
            className="bg-white/90 py-12"
        >
            <div
                className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-12"
            >
                {/* Left column: Main content */}
                <div className="md:col-span-1 lg:col-span-6 flex flex-col gap-6">
                    <h2 className="text-3xl font-bold leading-tight text-slate-900">
                        How much do car transport companies charge?
                    </h2>

                    <div className="space-y-5 text-base leading-7 text-slate-700">
                        <p>
                            Car shipping costs are based on several factors, including current
                            market trends, carrier availability, and fuel prices. Your total cost
                            will also depend on the type of car you want to move, where it needs
                            to go, its size, condition (or if it has any modifications), total
                            transport distance, transport type (open or enclosed trailer
                            shipment), and finally, the time of year when you book.
                        </p>

                        {/* <p>
                            While our instant quote calculator provides the most accurate estimates in the industry, rates often
                            change. That means prices can increase before your vehicle is picked
                            up or assigned to a driver. The Montway TruePrice Guarantee protects
                            customers from unexpected price increases and ensures a predictable
                            cost.
                        </p> */}
                        <p>
                            Get a quote with our car shipping calculator, use our Live Chat or call (844) 748-4550
                        </p>
                    </div>

                    {/* Additional information link */}
                    <div className="mt-16">
                        <Link href="/" className="inline-flex gap-1 items-center justify-center px-4 py-2 rounded-2xl bg-blue-600/50 text-base font-semibold">
                            Shipping cost information
                            <ChevronRight
                                className="size-3.5 shrink-0"
                            />
                        </Link>
                    </div>
                </div>
                {/* Right column: Cost factors */}
                <div className="md:col-span-1 lg:col-span-6">

                    {/* Factors */}
                    <div
                        className="w-full flex flex-col gap-6"
                    >
                        <DetailsDivider />
                        {/* Accordion item 1 */}
                        <details
                            className="group"
                        >
                            <summary
                                className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium outline-none transition-all"
                            >
                                <span
                                    className="flex items-center gap-4"
                                >
                                    {/* Package icon */}
                                    <span
                                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200"
                                        aria-hidden="true"
                                    >
                                        <SportCarIcon />

                                    </span>
                                    <span className="flex flex-col gap-0.5">
                                        <span>Size and weight of vehicle</span>
                                    </span>
                                </span>
                                {/* Plus icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="size-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180 [&>path:last-child]:transition-opacity [&>path:last-child]:duration-200 group-open:[&>path:last-child]:opacity-0"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </summary>
                            {/* Details description */}
                            <div className="pb-4 pl-14 pr-0 pt-2 text-sm leading-relaxed text-gray-500">
                                Longer, taller or heavier-than-average vehicles require special accommodations by car transport companies and, as a result, the price may vary.
                            </div>

                        </details>
                        <DetailsDivider />
                        {/* Accordion item 2 */}
                        <details
                            className="group"
                        >
                            <summary
                                className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium outline-none transition-all"
                            >
                                <span
                                    className="flex items-center gap-4"
                                >
                                    {/* Package icon */}
                                    <span
                                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200"
                                        aria-hidden="true"
                                    >
                                        <SteeringWheelIcon />

                                    </span>
                                    <span className="flex flex-col gap-0.5">
                                        <span>The car condition</span>
                                    </span>
                                </span>
                                {/* Plus icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="size-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180 [&>path:last-child]:transition-opacity [&>path:last-child]:duration-200 group-open:[&>path:last-child]:opacity-0"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </summary>
                            {/* Details description */}
                            <div className="pb-4 pl-14 pr-0 pt-2 text-sm leading-relaxed text-gray-500">
                                Shipping inoperable vehicles costs more because it requires extra tools and labor for car shipping companies to accommodate the cargo. But if your car rolls, steers, and brakes, we can ship it.
                            </div>

                        </details>
                        <DetailsDivider />
                        {/* Accordion item 3 */}
                        <details
                            className="group"
                        >
                            <summary
                                className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium outline-none transition-all"
                            >
                                <span
                                    className="flex items-center gap-4"
                                >
                                    {/* Package icon */}
                                    <span
                                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200"
                                        aria-hidden="true"
                                    >
                                        <TrailerIcon />

                                    </span>
                                    <span className="flex flex-col gap-0.5">
                                        <span>The transport type</span>
                                    </span>
                                </span>
                                {/* Plus icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="size-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180 [&>path:last-child]:transition-opacity [&>path:last-child]:duration-200 group-open:[&>path:last-child]:opacity-0"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </summary>
                            {/* Details description */}
                            <div className="pb-4 pl-14 pr-0 pt-2 text-sm leading-relaxed text-gray-500">
                                Your price can vary depending on the trailer type. Open transport is the standard and more affordable option, while enclosed transport requires specific handling.
                            </div>

                        </details>
                        <DetailsDivider />
                        {/* Accordion item 4 */}

                        <details
                            className="group"
                        >
                            <summary
                                className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium outline-none transition-all"
                            >
                                <span
                                    className="flex items-center gap-4"
                                >
                                    {/* Package icon */}
                                    <span
                                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200"
                                        aria-hidden="true"
                                    >
                                        <MapMarkerDistanceIcon />

                                    </span>
                                    <span className="flex flex-col gap-0.5">
                                        <span>The shipping distance</span>
                                    </span>
                                </span>
                                {/* Plus icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="size-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180 [&>path:last-child]:transition-opacity [&>path:last-child]:duration-200 group-open:[&>path:last-child]:opacity-0"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </summary>
                            {/* Details description */}
                            <div className="pb-4 pl-14 pr-0 pt-2 text-sm leading-relaxed text-gray-500">
                                You can track your order by logging into your account and visiting the
                                Orders section. You will receive tracking information via email once your
                                order ships. For real-time updates, you can also use the tracking number
                                provided in your shipping confirmation email.
                            </div>

                        </details>
                        <DetailsDivider />
                    </div>


                </div>

            </div>

        </section>
    )
}