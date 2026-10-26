import CheckBadge from "@/components/ui/CheckBadge"

import {HeroBadgeProps} from '@/lib/definitions'

export default function HeroBadge({
    badgeText,
    badgeType
}: HeroBadgeProps){

    return(
        <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
            {/* svg */}
            {badgeType === "check-badge" ? <CheckBadge /> : ''} 
            
            {badgeText}
        </div>
    )
}