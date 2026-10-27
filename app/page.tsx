import NavWrapper from '@/components/homepage/header/NavWrapper';
import AppFooter from '@/components/homepage/footer/Footer';
import AppHero from '@/components/homepage/hero/Hero'

import {appHeaderProps} from '@/lib/placeholderdata'
import { appHeroProps } from '@/lib/placeholderdata'

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
        <AppHero 
          appHeroProps={appHeroProps}
          />
      </main>
      <AppFooter />
    </>
  );
}
