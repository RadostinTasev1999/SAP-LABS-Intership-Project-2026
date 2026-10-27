import { Card, CardContent } from '@/components/ui/card'
import ChevronRight from '@/components/ui/ChevronRight'
import CheckBadge from '@/components/ui/CheckBadge'

import Link from 'next/link'
import RouteIcon from '@/components/ui/RouteIcon'
import TruckIcon from '@/components/ui/TruckIcon'

const item = {
    title: 'Ship your car safe & secure',
    description: `Get a quote through our state-of-the-art car shipping cost calculator, and we'll connect you with an experienced, reputable driver.`,
    link: 'Get Quote',
    icon: (
        <CheckBadge />
    )
}

export default function HeroCard(){

    return(
        <>
        {/* Card 1 */}
        <Card className='w-full max-w-xs'>
            <CardContent className='flex flex-col gap-3'>
                <div className='rounded-lg items-center justify-center' > 
                    {item.icon}
                </div>
                <Link 
                    href="/"
                    className='block text-sm leading-tight font-medium'
                    >
                        {item.title}
                </Link>
                <p className='text-xs leading-relaxed'>
                    {item.description}
                </p>
                <Link 
                    href="/"
                    className='inline-flex items-center gap-1 text-xs font-medium hover:underline'
                    >
                        {item.link}
                        <ChevronRight className='size-2.5 shrink-0'/>
                </Link>
            </CardContent>

        </Card>
        {/* Border */}
        <div className='border-b w-dvw max-w-xs sm:w-auto sm:border-r border-slate-400 sm:h-[183.95px]'/>
         {/* Card 2 */}
         <Card className='w-full max-w-xs'>
            <CardContent className='flex flex-col gap-3'>
                <div className='rounded-lg items-center justify-center' > 
                    <RouteIcon />
                </div>
                <Link 
                    href="/"
                    className='block text-sm leading-tight font-medium'
                    >
                        No-hassle car transport
                </Link>
                <p className='text-xs leading-relaxed'>
                    We coordinate your door-to-door car shipping order from start to finish and manage your car transportation with care and respect.
                </p>
                <Link 
                    href="/"
                    className='inline-flex items-center gap-1 text-xs font-medium hover:underline'
                    >
                        Door-to-door Service
                        <ChevronRight className='size-2.5 shrink-0'/>
                </Link>
            </CardContent>

        </Card>
        <div className='border-b w-dvw max-w-xs sm:w-auto sm:border-r border-slate-400 sm:h-[183.95px]'/>
        {/* Card 3 */}
        <Card className='w-full max-w-xs'>
            <CardContent className='flex flex-col gap-3'>
                <div className='rounded-lg items-center justify-center' > 
                    <TruckIcon />
                </div>
                <Link 
                    href="/"
                    className='block text-sm leading-tight font-medium'
                    >
                        More than an auto transport company
                </Link>
                <p className='text-xs leading-relaxed'>
                    We offer resources for local car sellers, car dealerships, and clients looking to connect with moving companies.
                </p>
                <Link 
                    href="/"
                    className='inline-flex items-center gap-1 text-xs font-medium hover:underline'
                    >
                        Moving calculator
                        <ChevronRight className='size-2.5 shrink-0'/>
                </Link>
            </CardContent>

        </Card>
        </>
    )
}