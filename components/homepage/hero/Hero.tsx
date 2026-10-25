import CheckBadge from '@/components/ui/CheckBadge'
import Link from 'next/link'

import ArrowRight from '@/components/ui/ArrowRight'
import PhoneIcon from '@/components/ui/PhoneIcon'
import LockIcon from '@/components/ui/LockIcon'


export default function AppHero(){
    
    return(
        <section className="relative overflow-hidden backdrop-blur-md bg-white/30 py-16 sm:py-20 lg:py-24 mt-[96px]">
            <div
                className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                {/* Left column: Hero-content */}

                <div className="flex flex-col items-start">
                    {/* Trust badge */}
                    <div
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
                        {/* svg */}
                        <CheckBadge />
                        Trusted by 50,000+ customers
                    </div>
                    {/* Main Heading */}
                    <h1 className='max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl'>
                        Ship your car
                        <br />
                        <em className='text-sky-600 not-italic'>anywhere</em>
                        &nbsp;
                        in the U.S.
                    </h1>

                    {/* Description */}
                    <p
                        className='mt-6 max-w-xl text-base leading-7 text-slate-800 sm:text-lg sm:leading-8'>
                        Transparent pricing with no hidden fees. Automated updates
                        throughout the entire process. Backed by 17,000+ drivers
                        and a vetted carrier network.
                    </p>

                    {/* CTA links */}
                    <div className='mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row'>
                        {/* Quote button */}
                        <Link href="#" className='inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-sky-700'>
                            Get an Instant Quote
                            <ArrowRight />
                        </Link>
                        {/* Phone button */}
                        <Link href="#" className='inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition-colors hover:bg-slate-100'>
                            <PhoneIcon />
                            Call (800) 951-3352
                        </Link>
                    </div>
                </div>
                {/* Right column: Quote form card */}

                <div
                    className='w-full rounded-2xl bg-white p-6 sm:p-9'
                >
                    {/* Card heading */}
                    <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>
                        Get your price in 60 seconds
                    </h2>

                    <p className='mt-2 text-sm leading-6 text-slate-500'>
                        No obligation. No credit card required.
                    </p>

                    {/* Quote form */}

                    <form action="" className='mt-6'>
                        {/* Pickup and delivery ZIP codes */}
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            {/* Pickup ZIP */}
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="hqf-origin" className='text-sm font-semibold text-slate-800'>
                                    Pickup ZIP
                                </label>
                                <input
                                    type="text"
                                    id='hqf-origin'
                                    name='origin'
                                    placeholder='e.g. 85281'
                                    className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900'
                                />
                            </div>
                            {/* Delivery ZIP */}
                            <div className='flex flex-col gap-2'>
                                <label
                                    htmlFor="hqf-destination"
                                    className='text-sm font-semibold text-slate-800'
                                >
                                    Delivery ZIP
                                </label>

                                <input
                                    type="text"
                                    id='hqf-destination'
                                    name='destination'
                                    placeholder='e.g. 60614'
                                    className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900'
                                />

                            </div>
                        </div>
                        {/* Vehicle details */}
                        <div className='mt-5 flex flex-col gap-2'>
                            <label
                                htmlFor='hqf-vehicle'
                                className='text-sm font-semibold text-slate-800'
                            >
                                Vehicle (VIN or Year, Make, Model)
                            </label>

                            <input
                                type="text"
                                id='hqf-vehicle'
                                name='vehicle'
                                placeholder='VIN or e.g. 2022 Toyota Camry'
                                className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900'
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type='submit'
                            className='mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800'
                        >
                            Get My Quote
                            <ArrowRight />
                        </button>
                    </form>

                    {/* Security note */}
                    <p className='mt-4 flex items-center justify-center gap-1.5 text-center text-xs leading-5 text-slate-500'>
                        <LockIcon />
                        Your price is locked in, guaranteed. No bait-and-switch.
                    </p>

                </div>
            </div>

        </section>
    )
}