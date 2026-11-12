import { HeroServiceDescriptionProp } from "@/lib/definitions";

export default function HeroServiceDescription({
  description,
}: HeroServiceDescriptionProp) {
  return (
    <div className="space-y-5 text-base leading-7 text-slate-700">
      {description.map((el) => (
        <p key={el.id}>{el.text}</p>
      ))}
    </div>
  );
}
