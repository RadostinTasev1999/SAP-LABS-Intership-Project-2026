import NavWrapper from "@/components/layout/header/NavWrapper";
import AppFooter from "@/components/layout/footer/Footer";
import AppHero from "@/components/layout/hero/Hero";
import HeroTimeline from "@/components/layout/hero/HeroTimeline";
import HeroAbout from "@/components/layout/about/HeroAbout";
import HeroServiceInfo from "@/components/layout/hero/HeroServiceInfo";

import { appHeaderProps } from "@/lib/placeholderdata";
import { appHeroProps } from "@/lib/placeholderdata";
import { footerGridData } from "@/lib/placeholderdata";
import { footerBottomData } from "@/lib/placeholderdata";
import { heroLayoutCardData } from "@/lib/placeholderdata";
import { heroTimelineData } from "@/lib/placeholderdata";
import { heroAboutData } from "@/lib/placeholderdata";
import { heroServiceIntro } from "@/lib/placeholderdata";
import { heroServiceDetails } from "@/lib/placeholderdata";

export default function Home() {
  return (
    <>
      {/* Header */}
      <NavWrapper appHeaderProps={appHeaderProps} />
      <main className="min-h-screen bg-cover bg-center bg-[url(/SiteBackgroundImage.png)] bg-fixed">
        {/* Hero Section */}
        <AppHero
          appHeroProps={appHeroProps}
          heroLayoutCardData={heroLayoutCardData}
        />
        {/* Company Service Process Info */}
        <HeroTimeline
          timelineHeading={heroTimelineData.timelineHeading}
          timelineSteps={heroTimelineData.timelineSteps}
        />

        {/* Company Service Principles */}
        <HeroAbout heroAboutData={heroAboutData} />

        {/* ? Statistics ?*/}

        {/* Car shipping price evaluation info */}
        <HeroServiceInfo
          heroServiceIntro={heroServiceIntro}
          heroServiceDetails={heroServiceDetails}
        />
      </main>
      <AppFooter
        footerGridData={footerGridData}
        footerBottomData={footerBottomData}
      />
    </>
  );
}
