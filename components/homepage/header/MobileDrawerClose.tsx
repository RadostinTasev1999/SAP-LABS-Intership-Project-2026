import CloseIcon from "@/components/ui/CloseIcon"
import {MobileDrawerBtnProp} from '@/lib/definitions'

export default function MobileDrawerClose({
    onMobileClose
}: MobileDrawerBtnProp){

    return(
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <button type="button" onClick={onMobileClose} className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none" aria-label="Close menu">
                <span className="text-sm font-semibold">
                    Close
                </span>
                <CloseIcon />
            </button>
        </div>
    )
}