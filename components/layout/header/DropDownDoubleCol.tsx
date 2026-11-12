import DropDownDoubleItem from "./DropDownDoubleItem";
import { DropDownDoubleColProps } from "@/lib/definitions";

export default function DropDownDoubleCol({
  heading,
  menuItems,
  id,
}: DropDownDoubleColProps) {
  return (
    <li className={`${id === 1 ? "border-r border-slate-300" : "ml-9"}`}>
      <span className="mb-4 mt-2 ml-2 block text-xs font-bold uppercase text-blue-800/80">
        {heading}
      </span>

      <ul className="space-y-1">
        {menuItems.map((el) => (
          <DropDownDoubleItem key={el.id} text={el.text} />
        ))}
      </ul>
    </li>
  );
}
