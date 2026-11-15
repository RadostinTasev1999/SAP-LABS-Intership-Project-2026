"use client";

import { useHeaderContext } from "@/lib/context/HeaderContext";
import { HeaderContext } from "@/lib/context/HeaderContext";
import { AnimatePresence } from "motion/react";

import Header from "./Header";
import MobileDrawer from "./MobileDrawer";

import { useState } from "react";

export default function NavWrapper() {
  
  const appHeaderProps = useHeaderContext()

  const [showMenu, setShowMenu] = useState(false);

  const onMobileOpen = () => {
    console.log("Hamburger clicked!");
    setShowMenu(true);
  };

  const onMobileClose = () => {
    console.log("Close button clicked!");
    setShowMenu(false);
  };

  return (
    <HeaderContext.Provider value={appHeaderProps}>
      <Header
        onMobileOpen={onMobileOpen}
      />

      <AnimatePresence initial={false}>
        {showMenu && (
          <MobileDrawer
            onMobileClose={onMobileClose}
          />
        )}
      </AnimatePresence>
    </HeaderContext.Provider>
  );
}
