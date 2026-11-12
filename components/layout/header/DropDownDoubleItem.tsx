import Link from "next/link";

import { DropDownDoubleItemProp } from "@/lib/definitions";

export default function DropDownDoubleItem({ text }: DropDownDoubleItemProp) {
  return (
    <li>
      <Link
        href="/"
        className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50"
      >
        {text}
      </Link>
    </li>
  );
}
