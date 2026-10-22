import * as motion from "motion/react-client"

import Link from 'next/link'

import { MobileDrawerProps } from '@/lib/definitions'

import CloseIcon from '@/components/ui/CloseIcon'
import ChevronRight from '@/components/ui/ChevronRight'

export default function MobileDrawer({
    onMobileClose
}: MobileDrawerProps){
    return(
        // Mobile Drawer Overlay / Container
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity: 0, scale: 0 }}
            className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-xl flex flex-col h-full overflow-y-auto" 
            role="navigation" 
            aria-label="Mobile navigation"
            
            >

            {/* Header Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <button type="button" onClick={onMobileClose} className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none" aria-label="Close menu">
                    <span className="text-sm font-semibold">
                        Close
                    </span>
                    <CloseIcon />
                </button>
            </div>

            {/* Navigation Menu List */}
            <nav className='flex-1 px-2 py-4'>
                <ul className='space-y-1'>
                {/* Menu Item 1: Transport Service (Dropdown)  */}
                <li>
                    <details className='group'>
                        <summary className='flex items-center justify-between px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors'>
                            <span>Transport Services</span>
                            <span className='shrink-0 transition-transform duration-200 group-open:rotate-90'>
                                <ChevronRight className='w-4 h-4'/>
                            </span>
                        </summary>
                        <ul className='mt-1 pl-4 pr-2 space-y-1 border-l-2 border-gray-100 ml-3'>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Enclosed Car Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Car Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Supercar Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Classic Car Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Emergency vehicle transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Luxury Car Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Boat Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Camper Transport
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                {/* Menu Item 2: Routes */}
                <li>
                    <details className='group'>
                        <summary className='flex items-center justify-between px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors'>
                            <span>Routes</span>
                            <span className='shrink-0 transition-transform duration-200 group-open:rotate-90'>
                                <ChevronRight className='w-4 h-4'/>
                            </span>
                        </summary>
                        <ul className='mt-1 pl-4 pr-2 space-y-1 border-l-2 border-gray-100 ml-3'>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Belgium to Spain
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Germany to Spain
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Netherlands to Spain
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                   Spain to Germany
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                   Spain to Netherlands
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                {/* Menu Item 3: Destinations */}
                <li>
                    <details className='group'>
                        <summary className='flex items-center justify-between px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors'>
                            <span>Destinations</span>
                            <span className='shrink-0 transition-transform duration-200 group-open:rotate-90'>
                                <ChevronRight className='w-4 h-4'/>
                            </span>
                        </summary>
                        <ul className='mt-1 pl-4 pr-2 space-y-1 border-l-2 border-gray-100 ml-3'>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    Belgium
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                    France
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                   Germany
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                   Italy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md'>
                                  Monaco
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                {/* Menu Item 4: Direct Link */}
                <li>
                    <Link href="#" className='block px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors'>
                        Request a Quote
                    </Link>
                </li>
                </ul>
            </nav>
        </motion.div>
    )
}