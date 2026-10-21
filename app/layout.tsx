import "./globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* Footer */}
      </body>
    </html>
  );
}
