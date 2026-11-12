import { DetailsDescriptionProp } from "@/lib/definitions";

export default function DetailsDescription({
  description,
}: DetailsDescriptionProp) {
  return (
    <div className="pb-4 pl-14 pr-0 pt-2 text-sm leading-relaxed text-gray-500">
      {description}
    </div>
  );
}
