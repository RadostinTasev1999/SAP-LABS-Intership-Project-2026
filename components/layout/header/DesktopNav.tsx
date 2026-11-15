"use client"

import NavListItem from "./NavListItem";

import { useContext } from "react";
import { HeaderContext } from "@/lib/context/HeaderContext";


export default function DesktopNav() {

  const { desktopNav } = useContext(HeaderContext);


  return (
    <nav className="hidden lg:flex items-center" aria-label="Main navigation">
      <ul className="flex items-center gap-6 font-semibold text-sm">
        {/* Home */}
        {desktopNav.length !== 0 &&
          desktopNav.map((el) => {
            const dropDownSingle = el.dropDownSingle
              ? el.dropDownSingle
              : undefined;
            const dropDownDouble = el.dropDownDouble
              ? el.dropDownDouble
              : undefined;

            return (
              <NavListItem
                key={el.id}
                id={el.id}
                url={el.url}
                text={el.text}
                icon={el.icon}
                dropDownSingle={dropDownSingle}
                dropDownDouble={dropDownDouble}
              />
            );
          })}
      </ul>
    </nav>
  );
}
