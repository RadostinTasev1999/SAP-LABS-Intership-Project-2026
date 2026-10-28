import NavWrapper from '@/components/homepage/header/NavWrapper';
import AppFooter from '@/components/homepage/footer/Footer';
import AppHero from '@/components/homepage/hero/Hero'
import HeroTimeline from '@/components/homepage/hero/HeroTimeline'

import {appHeaderProps} from '@/lib/placeholderdata'
import { appHeroProps } from '@/lib/placeholderdata'
import { footerGridData } from '@/lib/placeholderdata';
import { footerBottomData } from '@/lib/placeholderdata'

// appHeaderProps
// mobileDrawer props

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
          />
          {/* Timeline section */}
        <HeroTimeline />
      </main>
      <AppFooter 
        footerGridData={footerGridData}
        footerBottomData={footerBottomData}
        />
    </>
  );
}
