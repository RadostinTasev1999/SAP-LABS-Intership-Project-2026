import NavWrapper from '@/components/homepage/header/NavWrapper';
import AppFooter from '@/components/homepage/footer/Footer';
import AppHero from '@/components/homepage/hero/Hero'
import HeroTimeline from '@/components/homepage/hero/HeroTimeline'
import HeroAbout from '@/components/homepage/about/HeroAbout'

import {appHeaderProps} from '@/lib/placeholderdata'
import { appHeroProps } from '@/lib/placeholderdata'
import { footerGridData } from '@/lib/placeholderdata';
import { footerBottomData } from '@/lib/placeholderdata'
import {heroLayoutCardData} from '@/lib/placeholderdata'
import { heroTimelineData } from '@/lib/placeholderdata';
import { heroAboutData } from '@/lib/placeholderdata'

export default function Home() {

  return (
    <>
      {/* Header */}
      <NavWrapper 
        appHeaderProps={appHeaderProps}
        />
      <main className='min-h-screen bg-cover bg-center bg-[url(/SiteBackgroundImage.png)] bg-fixed'>
        {/* Hero Section */}
        <AppHero 
          appHeroProps={appHeroProps}
          heroLayoutCardData={heroLayoutCardData}
          />
          {/* Timeline section */}
        <HeroTimeline 
            timelineHeading={heroTimelineData.timelineHeading}
            timelineSteps={heroTimelineData.timelineSteps}
            />

          {/* About us Section */}
          <HeroAbout 
              heroAboutData={heroAboutData}
            />
      </main>
      <AppFooter 
        footerGridData={footerGridData}
        footerBottomData={footerBottomData}
        />
    </>
  );
}
