import Link from "next/link";
import { DropDownSingleColProps } from "@/lib/definitions";

export default function DropDownSingleCol({
  url,
  text,
}: DropDownSingleColProps) {
  return (
    <li>
      <Link
        href={url}
        className="block rounded-xl mx-3 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:text-blue-600"
      >
        {text}
      </Link>
    </li>
  );
}
