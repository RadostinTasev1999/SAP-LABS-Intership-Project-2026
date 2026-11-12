import DropDownDoubleCol from "./DropDownDoubleCol";

import { DropDownDoubleProp } from "@/lib/definitions";

export default function DropDownDouble({ dropDownDouble }: DropDownDoubleProp) {
  return (
    <ul className="absolute left-0 top-full pt-2 hidden group-hover:grid z-50 grid w-[35rem] grid-cols-2 rounded-lg border border-slate-300 bg-white/90 p-6 shadow-xl">
      {/* Column 1 */}

      {dropDownDouble.length !== 0 &&
        dropDownDouble.map((el) => (
          <DropDownDoubleCol
            key={el.id}
            id={el.id}
            heading={el.heading}
            menuItems={el.menuItems}
          />
        ))}

      {/* Column 2 */}
    </ul>
  );
}
