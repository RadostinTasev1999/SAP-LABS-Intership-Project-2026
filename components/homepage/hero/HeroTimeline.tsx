export default function HeroTimeline(){

    return(
        <section className="py-8 sm:py-16 lg:py-24 ">
            <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 sm:py-8 md:grid-cols-2 lg:px-8 backdrop-blur-md bg-blue-50/90 rounded-3xl">

            {/* Left Column: Sticky Header & Description */}
            {/* h-fit: height:fit-content */}
            <div className="h-fit items-start md:sticky md:top-26">
                <div className="flex h-auto flex-col items-start gap-4">
                    <span
                        className="inline-flex w-fit shrink-0 items-center justify-center overflow-hidden h-auto px-3 py-1 text-white bg-blue-600/90 text-sm font-medium rounded-full"
                        >
                        Process
                    </span>
                    <h2
                        className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl"
                        >
                            Our Process
                    </h2>
                    <p 
                        className="text-xl"
                        >
                            From strategy to execution, our process ensures we create custom marketing plans that drive results. We understand your goals, tailor our approach, and execute with precision to deliver measurable success.
                    </p>
                </div>

            </div>
            {/* Right Column: Timeline Steps */}
            <div className="relative">

                {/* Step 01 */}
                <div className="flex items-start ">
                    {/* Step Container */}
                    <div className="bg-blue-600/90 z-20 rounded-full p-2">
                        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-full border border-slate-300 bg-blue-50">
                            <div className="text-2xl font-semibold text-slate-700">01</div>
                        </div>
                    </div>
                    <div className="w-full px-8 pt-2 md:flex md:flex-1 mb-43.5">
                        <div className="space-y-2.5">
                            <h3 className="text-2xl font-semibold">Get an instant quote and book your order</h3>
                            <p className="text-base">
                               Use our free instant quote calculator to get an estimate or call a Montway advisor at (844) 748-4550. When you’re ready to book, just follow the directions in your email or give us a  call. At booking, a representative will review your shipment information and confirm your order. No payment is required until your shipment is scheduled for pickup. 
                            </p>
                        </div>

                    </div>
                </div>

                {/* Step 02 */}
               <div className="flex items-start ">
                    {/* Step Container */}
                    <div className="bg-blue-600/90 z-20 rounded-full p-2">
                        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-full border border-slate-300 bg-blue-50">
                            <div className="text-2xl font-semibold text-slate-700">02</div>
                        </div>
                    </div>
                    <div className="w-full px-8 pt-2 md:flex md:flex-1 mb-43.5">
                        <div className="space-y-2.5">
                            <h3 className="text-2xl font-semibold">We pick up your vehicle</h3>
                            <p className="text-base">
                                Schedule your pickup date, time and an easy-to-access pickup location with your trucker. You can even release your car while you’re at work.
                            </p>
                        </div>

                    </div>
                </div>
                {/* Step 03 */}
                <div className="flex items-start ">
                    {/* Step Container */}
                    <div className="bg-blue-600/90 z-20 rounded-full p-2">
                        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-full border border-slate-300 bg-blue-50">
                            <div className="text-2xl font-semibold text-slate-700">03</div>
                        </div>
                    </div>
                    <div className="w-full px-8 pt-2 md:flex md:flex-1 mb-43.5">
                        <div className="space-y-2.5">
                            <h3 className="text-2xl font-semibold">Receive your vehicle</h3>
                            <p className="text-base">
                                Reuniting you and your vehicle is an exciting moment—and one we look forward to at Montway! Your trucker will call you when your vehicle is almost home so you can greet them both right at your own driveway (or a nearby agreed-upon location).
                            </p>
                        </div>

                    </div>
                </div>
                {/* Step 04 */}
                
                {/* Step 05 */}
               

                {/* Vertical connecting Line Background */}
                <div className="absolute h-[630px] top-[36px] left-8 w-0.5 z-0 overflow-hidden bg-slate-400/80" />
            </div>
            </div>
        </section>
    )
}