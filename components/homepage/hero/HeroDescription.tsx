import {HeroDescProp} from '@/lib/definitions'

export default function HeroDescription({
    description
}:HeroDescProp){
    
    return(
        <p
            className='mt-6 max-w-xl text-base leading-7 text-slate-800 sm:text-lg sm:leading-8'>
            {description}
        </p>
    )
}