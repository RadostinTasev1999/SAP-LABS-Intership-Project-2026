import Link from "next/link";
import { useContext } from "react";
import { HeaderContext } from "@/lib/context/HeaderContext";

export default function DesktopCta() {
  const { desktopCta } = useContext(HeaderContext);

  return (
    <div className="hidden lg:block">
      <Link
        href={desktopCta.url || "#"}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase px-6 py-3 rounded-full shadow-sm"
      >
        {desktopCta.text}
      </Link>
    </div>
  );
}
