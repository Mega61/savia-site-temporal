'use client'

import Header from '@/src/components/ui/header'
import Footer from '@/src/components/ui/footer'

interface DefaultLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export default function DefaultLayout({
  children,
  locale
}: DefaultLayoutProps) {
  return (
    <>
      <Header />

      <main className="grow">

        {children}

      </main>

      <Footer />
    </>
  )
}
