"use client"

import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'

import Image from "next/image"
import Link from "next/link"

import { AppHeaderProps } from "@/lib/definitions"

import HamburgerIcon from '@/components/ui/HamburgerIcon'

export default function AppHeader({
    onMobileOpen
}: AppHeaderProps){

    const { scrollY } = useScroll(); // tracks scroll position
    // scrollY -> represents the vertical scroll position in pixels

    const [hidden, setHidden] = useState(false); // tracks whether the header is hidden

    useMotionValueEvent(scrollY,"change",(current) => {

        const previous = scrollY.getPrevious() ?? 0

        if (current > previous && current > 150) {
                setHidden(true)
        } else{
            setHidden(false)
        }
    })

    return(
        <motion.header 
            animate={{
                y:hidden ? -140 : 0,
                opacity:hidden ? 0 : 1
            }}
            transition={{ duration:0.3, ease: "easeInOut"}}
            className="fixed inset-x-0 top-0">
            {/* General Header Container */}
            <div className="w-full bg-white text-gray-900 shadow-md backdrop-blur-md">
                <div id="header-container" className="mx-auto px-4 flex items-center justify-between">
                    {/* DESKTOP VIEW */}

                    {/* Left: Logo */}
                    <div className="hidden lg:block shrink-0">
                        <Image 
                            src='/AutoMove Car Transport Logo.png'
                            width={300}
                            height={300}
                            alt="company-logo"
                            />
                    </div>

                    {/* Center: Main Navigation with Dropdowns */}
                    <nav className="hidden lg:flex items-center" aria-label="Main navigation">
                        <ul className="flex items-center gap-6 font-semibold text-sm">
                            {/* Home */}
                            <li className="py-2">
                                <Link href='#' className="hover:text-blue-600">
                                    Home
                                </Link>      
                            </li>
                            {/* Car Transport */}
                            <li className="py-2">
                                <Link href='#' className="hover:text-blue-600">
                                    Transport
                                </Link>      
                            </li>
                            {/* Dropdown Menu Item 1 */}
                            <li className="relative group py-2">
                                {/* Dropdown Trigger */}
                                <Link href="#" className="inline-flex items-center gap-1 hover:text-blue-600">
                                    Transport Services
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </Link>

                                {/* Dropdown Card Container (Hidden until parent hover) */}
                                <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50 border border-slate-200 backdrop-blur-md bg-white/90 w-64 rounded-3xl">
                                    <div className="p-4">
                                        <ul className="space-y-2 text-sm font-normal">
                                            <li>
                                                <Link href="#" className="block py-1 px-2 text-gray-600 hover:text-blue-400">
                                                    Car Transport
                                                </Link>
                                                <Link href="#" className="block py-1 px-2 text-gray-600 hover:text-blue-400">
                                                    Enclosed Car Transport
                                                </Link>
                                                <Link href="#" className="block py-1 px-2 text-gray-600 hover:text-blue-400">
                                                    Supercar Transport
                                                </Link>
                                                <Link href="#" className="block py-1 px-2 text-gray-600 hover:text-blue-400">
                                                    Classic Car Transport
                                                </Link>
                                                <Link href="#" className="block py-1 px-2 text-gray-600 hover:text-blue-400">
                                                    Boat Transport
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* DropDown Menu Item 2 */}
                            <li className="relative group py-2">
                                <Link href="#" className="inline-flex items-center gap-1 hover:text-blue-600">
                                    Car Transport Routes
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </Link>
                                <div className="absolute left-0 top-full pt-2 w-64 hidden group-hover:block z-50 border border-slate-200 backdrop-blur-md bg-white/90 rounded-3xl">
                                    <div className="p-4">
                                        <ul className="space-y-2 text-sm font-normal">
                                            <li>
                                                <Link href="#" className="block py-1 px-2 rounded text-gray-600 hover:text-blue-400">
                                                    Netherlands to Spain
                                                </Link>
                                                <Link href="#" className="block py-1 px-2 rounded text-gray-600 hover:text-blue-400">
                                                    Germany to Spain
                                                </Link>
                                                <Link href="#" className="block py-1 px-2 rounded text-gray-600 hover:text-blue-400">
                                                    Belgium to Spain
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Call to Action Button */}
                    <div className="hidden lg:block">
                        <Link href='#' className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase px-6 py-3 rounded-full shadow-sm">
                            Request a Quote
                        </Link>
                    </div>

                    {/* MOBILE VIEW */}

                    {/* Mobile Hamburger Menu Button */}
                    <div className="block lg:hidden">
                        <button onClick={onMobileOpen} className="p-2 text-gray-700 hover:text-blue-500 rounded-xl bg-slate-100" aria-label="Open mobile menu">
                            <HamburgerIcon className="w-6 h-6"/>
                        </button>
                    </div>

                    {/* Mobile Logo (Centered) */}
                    <div className="block lg:hidden">
                        <Link href="#" aria-label="Site logo">
                            <Image 
                                src='/AutoMove Car Transport Logo.png'
                                alt="Company logo"
                                width={300}
                                height={300}
                                className="max-w-[150px] h-auto object-contain mx-auto"
                                />
                        </Link>
                    </div>

                    {/* Mobile Right Spacer (Balances flex alignment) */}
                    <div className="block lg:hidden w-6"></div>
                </div>

            </div>
        </motion.header>
    )
}