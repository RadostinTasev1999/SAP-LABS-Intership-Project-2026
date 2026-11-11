import { HeroQuoteProp } from "@/lib/definitions"

export default function HeroQuoteHeading({
    quoteHeading
}: HeroQuoteProp){

    return(
        <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>
            {quoteHeading}
        </h2>
    )
}