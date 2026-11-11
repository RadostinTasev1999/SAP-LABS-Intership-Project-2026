import {HeroQuoteParagraphProp} from '@/lib/definitions'

export default function HeroQuoteParagraph({
    quoteParagraph
}:HeroQuoteParagraphProp){

    return(
        <p className='mt-2 text-sm leading-6 text-slate-500'>
            {quoteParagraph}
        </p>
    )
}