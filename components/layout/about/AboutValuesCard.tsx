import { AboutValuesCardProps } from '@/lib/definitions'

export default function AboutValuesCard({
    Icon,
    heading,
    text
}:AboutValuesCardProps){

    return(
        <div className="flex flex-col overflow-hidden rounded-xl text-sm shadow-xs p-6 space-y-4 border border-slate-400 backdrop-blur-sm bg-white/80">
            <div className="flex items-center gap-4">
                <div className="rounded-full p-3">
                    {/* svg */}
                    {Icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                    {heading}
                </h3>
            </div>
            <p className="text-slate-900">
                {text}
            </p>
        </div>
    )
}