import { Card, CardContent } from '@/components/ui/card'

import Link from 'next/link'
import { HeroCardTypes } from '@/lib/definitions'

export default function HeroCard({
    Icon,
    title,
    description,
    link,
    LinkIcon
}: HeroCardTypes){

    return(
        <Card className='w-full max-w-xs'>
            <CardContent className='flex flex-col gap-3'>
                <div className='rounded-lg items-center justify-center' >
                    {Icon}
                </div>
                <Link
                    href="/"
                    className='block text-sm leading-tight font-medium'
                >
                    {title}
                </Link>
                <p className='text-xs leading-relaxed'>
                    {description}
                </p>
                <Link
                    href="/"
                    className='inline-flex items-center gap-1 text-xs font-medium hover:underline'
                >
                    {link}
                    {/* icon */}
                    {LinkIcon}
                </Link>
            </CardContent>
        </Card>
    )
}