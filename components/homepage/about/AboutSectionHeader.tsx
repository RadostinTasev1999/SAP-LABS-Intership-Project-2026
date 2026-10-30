import { AboutSectionHeaderProp } from '@/lib/definitions'

export default function AboutSectionHeader({
    sectionHeader
}:AboutSectionHeaderProp){

    return(
        <div className="space-y-4 text-center py-4 rounded-2xl backdrop-blur-sm bg-blue-50/90">
            <h2 className="text-3xl font-bold text-slate-900">{sectionHeader.heading}</h2>
            <p className="mx-auto max-w-2xl text-base font-semibold text-slate-700">
                {sectionHeader.text}
            </p>
        </div>
    )
}