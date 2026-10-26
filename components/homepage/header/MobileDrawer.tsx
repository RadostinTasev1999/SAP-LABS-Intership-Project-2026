import * as motion from "motion/react-client"

import { MobileDrawerProps } from '@/lib/definitions'
import MobileDrawerClose from './MobileDrawerClose'
import MobileNavigation from './MobileNavigation'

export default function MobileDrawer({
    onMobileClose,
    mobileDrawer
}: MobileDrawerProps){
    return(
        // Mobile Drawer Overlay / Container
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity: 0, scale: 0 }}
            className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-xl flex flex-col h-full overflow-y-auto" 
            role="navigation" 
            aria-label="Mobile navigation"
            
            >

            {/* Header Close Button */}
            <MobileDrawerClose
                onMobileClose={onMobileClose}
                    />

            {/* Navigation Menu List */}
            <MobileNavigation 
                mobileDrawer={mobileDrawer}
                />
        </motion.div>
    )
}