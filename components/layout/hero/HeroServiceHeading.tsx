import { HeroServiceHeadingProp } from "@/lib/definitions";

export default function HeroServiceHeading({
  heading,
}: HeroServiceHeadingProp) {
  return (
    <h2 className="text-3xl font-bold leading-tight text-slate-900">
      {heading}
    </h2>
  );
}
