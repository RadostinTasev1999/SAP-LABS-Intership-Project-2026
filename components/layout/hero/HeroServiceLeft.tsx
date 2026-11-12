import HeroServiceHeading from "./HeroServiceHeading";
import HeroServiceDescription from "./HeroServiceDescription";
import HeroServiceButton from "./HeroServiceButton";

import { HeroServiceLeftProps } from "@/lib/definitions";

export default function HeroServiceLeft({
  heading,
  description,
  url,
  link,
  Icon,
}: HeroServiceLeftProps) {
  return (
    <div className="md:col-span-1 lg:col-span-6 flex flex-col gap-6">
      <HeroServiceHeading heading={heading} />
      {/*  */}
      <HeroServiceDescription description={description} />
      {/* Additional information link */}
      <HeroServiceButton url={url} link={link} Icon={Icon} />
    </div>
  );
}
