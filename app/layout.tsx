import "./globals.css";

import AppHeader from '@/components/homepage/header/Header';
import AppFooter from '@/components/homepage/footer/Footer'


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <AppHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <AppFooter />
        {/* Footer */}
      </body>
    </html>
  );
}
