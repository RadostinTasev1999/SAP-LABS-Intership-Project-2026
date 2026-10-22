'use client'

import { AnimatePresence } from 'motion/react'

import Header from './Header'
import MobileDrawer from './MobileDrawer'
import { useState } from 'react'

export default function NavWrapper(){

    // mobile menu navigation
    const [showMenu, setShowMenu] = useState(false);

    const onMobileOpen = () => {
        console.log('Hamburger clicked!')
        setShowMenu(true);
    }

    const onMobileClose = () => {
        console.log('Close button clicked!')
        setShowMenu(false);
    }

    return(
        <>
            <Header 
                onMobileOpen={onMobileOpen}
                />

            <AnimatePresence initial={false}>
                {
                showMenu && (
                    <MobileDrawer 
                        onMobileClose={onMobileClose}   
                        />
                )
            }
            </AnimatePresence>
            
            
        </>
    )
}