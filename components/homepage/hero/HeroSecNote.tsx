import LockIcon from "@/components/ui/LockIcon"

import {HeroSecNoteProp} from '@/lib/definitions'

export default function HeroSecNote({
    securityNote
}: HeroSecNoteProp){

    return(
        <p className='mt-4 flex items-center justify-center gap-1.5 text-center text-xs leading-5 text-slate-500'>
            {securityNote.icon === 'lock-icon' ? <LockIcon /> : ""}
            {securityNote.label}
        </p>
    )
}