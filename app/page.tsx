import NavWrapper from '@/components/homepage/header/NavWrapper';
import AppFooter from '@/components/homepage/footer/Footer';
import AppHero from '@/components/homepage/hero/Hero'


export default function Home() {

  return (
    <>
      {/* Header */}
      <NavWrapper />
      <main className='min-h-screen bg-cover bg-center bg-[url(/MainBackground.png)] bg-fixed'>
        <AppHero />
      </main>
      <AppFooter />
    </>
    // <AppHero />
  );
}
