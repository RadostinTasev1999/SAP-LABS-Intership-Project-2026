import {HeroHeadingProps} from '@/lib/definitions'

export default function HeroHeading({
    headingPrimary,
    emphasis,
    headingSecondary
}: HeroHeadingProps){

    return(
        <h1 className='max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl'>
            {headingPrimary}
            <br />
            <em className='text-sky-600 not-italic'>{emphasis}</em>
            &nbsp;
           {headingSecondary}
        </h1>
    )
}