import "./globals.css";

import NavWrapper from '@/components/homepage/header/NavWrapper'
import AppFooter from '@/components/homepage/footer/Footer'


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <NavWrapper />
        <main className="min-h-screen bg-cover bg-center bg-[url(/MainBackground.png)] bg-fixed">
          {children}
        </main>
        <AppFooter />
        {/* Footer */}
      </body>
    </html>
  );
}
