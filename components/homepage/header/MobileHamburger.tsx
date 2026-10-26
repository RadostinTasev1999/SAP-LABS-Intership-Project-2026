import HamburgerIcon from "@/components/ui/HamburgerIcon"

import {AppHeaderProps} from '@/lib/definitions'

export default function MobileHamburger({
    onMobileOpen
}: AppHeaderProps){

    return(
        <div className="block lg:hidden">
            <button onClick={onMobileOpen} className="p-2 text-gray-700 hover:text-blue-500 rounded-xl bg-slate-100" aria-label="Open mobile menu">
                <HamburgerIcon className="w-6 h-6" />
            </button>
        </div>
    )
}