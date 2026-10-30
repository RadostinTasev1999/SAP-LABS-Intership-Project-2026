import { HeroTimelineCountProp } from '@/lib/definitions'

export default function HeroTimelineCount({
    count
}: HeroTimelineCountProp){

    return(
        <div className="bg-blue-600/90 z-20 rounded-full p-2">
            <div className="flex flex-col items-center justify-center px-3 py-2 rounded-full border border-slate-300 bg-blue-50">
                <div className="text-2xl font-semibold text-slate-700">{count}</div>
            </div>
        </div>
    )
}