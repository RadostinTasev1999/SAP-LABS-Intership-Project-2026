
import FooterLogo from '@/components/ui/FooterLogo'
import Link from 'next/link'

import LinkedInIcon from '@/components/ui/LinkedIn'
import TwitterIcon from '@/components/ui/TwitterIcon'
import FacebookIcon from '@/components/ui/FacebookIcon'

export default function AppFooter(){

    return(
        <footer className="text-slate-300 py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">

                    {/* Brand & Social column (Span 2 on large screens) */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <FooterLogo />
                        </div>
                        {/* Description */}
                        <p className='text-sm text-slate-400 leading-relaxed max-w-sm'>
                            Nationwide vehicle shipping powered by 17,000+ drivers and a vetted carrier network. A Haul OS company.
                        </p>
                        {/* Social icons */}
                        <div className='flex flex-wrap pt-2'>
                            {/* LinkedIn */}
                            <Link href="/" className='p-2'>
                                <LinkedInIcon />
                            </Link>
                            {/* Facebook Icon */}
                            <Link href="/" className='p-2'>
                                <FacebookIcon />
                            </Link>
                            {/* X (Twitter) */}
                            <Link href="/" className='p-2'>
                                <TwitterIcon />
                            </Link>

                        </div>
                    </div>

                    {/* Services Column */}
                        <div className='space-y-4'>
                            <h4 className='text-sm font-semibold tracking-wider text-slate-600 uppercase'>Services</h4>
                            <ul className='space-y-2.5 text-sm'>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Open Transport</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Enclosed Transport</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Expedited Shipping</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Motorcycle Transport</Link></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className='space-y-4'>
                            <h4 className='text-sm font-semibold tracking-wider text-slate-600 uppercase'>Company</h4>
                            <ul className='space-y-2.5 text-sm'>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>About Us</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Contact</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Careers</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Blog</Link></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className='space-y-4'>
                            <h4 className='text-sm font-semibold tracking-wider text-slate-600 uppercase'>Support</h4>
                            <ul className='space-y-2.5 text-sm'>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>(800) 951-2284</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>support@haulos.com</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>Track My Order</Link></li>
                                <li><Link href="/" className='text-slate-500 hover:text-slate-800 transition-colors'>FAQ</Link></li>
                            </ul>
                        </div>

                </div>

                {/* Bottom Footer Row */}

                <div className='pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400'>
                    <div>© 2026 HAUL OS. All rights reserved.</div>
                    <div className='flex flex-wrap justify-center gap-6'>
                        <Link href='/'>Privacy Policy</Link>
                        <Link href='/'>Terms of Services</Link>
                        <Link href='/'>Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}