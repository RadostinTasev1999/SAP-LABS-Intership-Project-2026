"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

import { AppHeaderProps } from "@/lib/definitions";

import HeaderLogo from "./HeaderLogo";
import DesktopNav from "./DesktopNav";
import DesktopCta from "./DesktopCta";
import MobileHamburger from "./MobileHamburger";
import MobileLogo from "./MobileLogo";

export default function AppHeader({
  onMobileOpen,
  navProps,
  desktopCta,
  route
}: AppHeaderProps) {
  const { scrollY } = useScroll(); // tracks scroll position
  // scrollY -> represents the vertical scroll position in pixels

  const [hidden, setHidden] = useState(false); // tracks whether the header is hidden

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* General Header Container */}
      <div className="w-full text-gray-900 shadow-md backdrop-blur-md bg-white/60">
        <div
          id="header-container"
          className="mx-auto px-4 flex items-center justify-between py-2"
        >
          {/* DESKTOP VIEW */}

          {/* Left: Logo */}
          <HeaderLogo />

          {/* Center: Main Navigation with Dropdowns */}
          {

            route === 'index' && (
              <>
              <DesktopNav navProps={navProps} />
              
              <DesktopCta url={desktopCta?.url} text={desktopCta?.text} />

              {/* Mobile view */}
              <MobileHamburger onMobileOpen={onMobileOpen} />

              <MobileLogo />
              </>
            )
            
          }

          {
            route === 'dashboard' && (
              <h1>Dashboard Header</h1>
            )
          }
          {/* Mobile Right Spacer (Balances flex alignment) */}
          <div className="block lg:hidden w-6"></div>
        </div>
      </div>
    </motion.header>
  );
}
