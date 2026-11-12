"use client";

import { AnimatePresence } from "motion/react";

import Header from "./Header";
import MobileDrawer from "./MobileDrawer";
import { NavWrapperProps } from "@/lib/definitions";
import { useState } from "react";

export default function NavWrapper({ appHeaderProps, route }: NavWrapperProps) {
  // mobile menu navigation
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
    <>
      <Header
        onMobileOpen={onMobileOpen}
        navProps={appHeaderProps.desktopNav}
        desktopCta={appHeaderProps.desktopCta}
        route={route}
      />

      <AnimatePresence initial={false}>
        {showMenu && (
          <MobileDrawer
            onMobileClose={onMobileClose}
            mobileDrawer={appHeaderProps.mobileDrawer}
          />
        )}
      </AnimatePresence>
    </>
  );
}
