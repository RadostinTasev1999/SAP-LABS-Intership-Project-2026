import Link from "next/link"
import Image from "next/image"

export default function AppFooter(){

    return(
        <footer className="w-full bg-slate-200 text-slate-600 text-sm font-normal py-12 border-t">
            <div id="footer-container" className="mx-auto px-4">

                {/* MAIN FOOTER GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

                    {/* COLUMN 1: Logo & Company Contact Info */}
                    <div className="space-y-4">
                        {/* Site Logo */}
                        <Link href="#" className="inline-block" aria-label="Company-Logo">
                            <Image 
                                src='/EuroMove European Car Transport Logo.png'
                                alt="Company_Logo"
                                width={300}
                                height={300}
                                />
                        </Link>

                        {/* Description Paragraph */}
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Auto Transport delivers reliable vehicle transport across Europe, with a strong focus on routes to and from Bulgaria. We offer door to door service, fast pickup and secure handling for cars, campers and high value vehicles. Available 24/7 for private and business transport.
                        </p>

                        {/* Direct Contact Details */}
                        <div className="pt-2 text-sm leading-6">
                            <p>
                                Call us 24/7
                                <Link href="tel:+359 899 633 281" className="text-blue-600 hover:text-blue-400 font-medium">
                                    +359 899 633 281
                                </Link>
                            </p>
                            <p>
                                Email:
                                <Link href="mailto:info@autotransport.com" className="text-blue-600 hover:text-blue-400 font-medium">
                                    info@autotransport.com
                                </Link>
                            </p>
                        </div>

                        
                    </div>
                    {/* Column 2: Car Transport Services */}
                    <div>
                        {/* Accordion on Mobile / Expanded on Desktop */}
                        <details className="group" >
                            <summary className="flex justify-between items-center cursor-pointer lg:cursor-default list-none text-slate-600 font-semibold text-base mb-3 pb-2 border-b border-slate-800 lg:border-none">
                                Car Transport
                                <span className="lg:hidden transition-transform group-open:rotate-180">▼</span>
                            </summary>

                            <ul className="space-y-2.5 text-slate-500 text-sm mt-3 lg:mt-0">
                                <li>
                                    <Link href='#'>
                                        Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Classic Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Enclosed Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Luxury Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Supercar Transport
                                    </Link>
                                </li>
                            </ul>

                        </details>
                    </div>
                    {/* Column 3: Vehicle Transport */}
                    <div>
                        {/* Accordion on Mobile / Expanded on Desktop */}
                        <details className="group lg:open">
                            <summary className="flex justify-between items-center cursor-pointer lg:cursor-default list-none text-slate-600 font-semibold text-base mb-3 pb-2 border-b border-slate-800 lg:border-none">
                                Car Transport
                                <span className="lg:hidden transition-transform group-open:rotate-180">▼</span>
                            </summary>

                            <ul className="space-y-2.5 text-slate-500 text-sm mt-3 lg:mt-0">
                                <li>
                                    <Link href='#'>
                                        Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Classic Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Enclosed Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Luxury Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Supercar Transport
                                    </Link>
                                </li>
                            </ul>

                        </details>
                    </div>
                    {/* Column 4: Fixed Routes */}
                    <div>
                        {/* Accordion on Mobile / Expanded on Desktop */}
                        <details className="group lg:open">
                            <summary className="flex justify-between items-center cursor-pointer lg:cursor-default list-none text-slate-600 font-semibold text-base mb-3 pb-2 border-b border-slate-800 lg:border-none">
                                Car Transport
                                <span className="lg:hidden transition-transform group-open:rotate-180">▼</span>
                            </summary>

                            <ul className="space-y-2.5 text-slate-500 text-sm mt-3 lg:mt-0">
                                <li>
                                    <Link href='#'>
                                        Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Classic Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Enclosed Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Luxury Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Supercar Transport
                                    </Link>
                                </li>
                            </ul>

                        </details>
                    </div>
                    {/* Column 5: Test */}
                    <div>
                        {/* Accordion on Mobile / Expanded on Desktop */}
                        <details className="group lg:open">
                            <summary className="flex justify-between items-center cursor-pointer lg:cursor-default list-none text-slate-600 font-semibold text-base mb-3 pb-2 border-b border-slate-800 lg:border-none">
                                Car Transport
                                <span className="lg:hidden transition-transform group-open:rotate-180">▼</span>
                            </summary>

                            <ul className="space-y-2.5 text-slate-500 text-sm mt-3 lg:mt-0">
                                <li>
                                    <Link href='#'>
                                        Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Classic Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Enclosed Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Luxury Car Transport
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Supercar Transport
                                    </Link>
                                </li>
                            </ul>

                        </details>
                    </div>
                </div>

            </div>
        </footer>
    )
}