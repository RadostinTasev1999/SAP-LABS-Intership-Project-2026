import DropDownSingleCol from './DropDownSingleCol'
import { DropDownSingleProp } from '@/lib/definitions'

export default function DropDownSingle({
    dropDownSingle
}: DropDownSingleProp){

    return(
        <ul className="absolute left-0 top-full pt-2 hidden group-hover:block z-50 border border-slate-300 backdrop-blur-md bg-white/90 min-w-60 rounded-lg">
            {
                dropDownSingle.map((el) => (
                    <DropDownSingleCol 
                        key={el.id}
                        url={el.url}
                        text={el.text}
                        />
                ))
            }
            
        </ul>
    )
}