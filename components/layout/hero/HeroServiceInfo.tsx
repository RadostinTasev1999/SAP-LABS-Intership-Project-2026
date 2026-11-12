import HeroServiceLeft from "./HeroServiceLeft";
import HeroServiceRight from "./HeroServiceRight";

import { HeroServiceInfoProps } from "@/lib/definitions";

export default function HeroServiceInfo({
  heroServiceIntro,
  heroServiceDetails,
}: HeroServiceInfoProps) {
  const IntroIcon = <heroServiceIntro.icon className="size-4" />;
  const Divider = <heroServiceDetails.divider />;
  const PlusIcon = <heroServiceDetails.plusIcon />;

  return (
    <section id="hero-service-info" className="bg-white/90 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-12">
        {/* Left column: Main content */}
        <HeroServiceLeft
          heading={heroServiceIntro.heading}
          description={heroServiceIntro.description}
          url={heroServiceIntro.url}
          link={heroServiceIntro.link}
          Icon={IntroIcon}
        />
        {/* Right column: Cost factors */}
        <HeroServiceRight
          Divider={Divider}
          PlusIcon={PlusIcon}
          detailsItems={heroServiceDetails.detailsItems}
        />
      </div>
    </section>
  );
}
