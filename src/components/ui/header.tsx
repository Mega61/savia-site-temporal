import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { useTranslations } from 'next-intl'
import { Link as ScrollLink } from 'react-scroll'

export default function Header() {

  const t = useTranslations("index")

  return (
    <header className="absolute top-2 md:top-6 w-full z-30">
      <div className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* <div className="flex items-center justify-between h-14 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg px-3"> */}
          <div className="flex items-center justify-between h-14">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="flex items-center justify-center" href="/">
                <Image src={Logo} width={200} height={200} alt="Logo" />
              </Link>
            </div>
            {/* Desktop navigation */}
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="hidden sm:flex grow justify-end flex-wrap items-center">
                <li>
                  <ScrollLink to="features" smooth={true} duration={500} className="cursor-pointer text-sm font-medium text-greySavia hover:text-darkGreenSavia px-3 lg:px-5 py-2 flex items-center transition">{t('header_features_link')}</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="benefits" smooth={true} duration={500} className="cursor-pointer text-sm font-medium text-greySavia hover:text-darkGreenSavia px-3 lg:px-5 py-2 flex items-center transition">{t('header_benefits_link')}</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="pricing" smooth={true} duration={500} className="cursor-pointer text-sm font-medium text-greySavia hover:text-darkGreenSavia px-3 lg:px-5 py-2 flex items-center transition">{t('header_pricing_link')}</ScrollLink>
                </li>
                <li className="ml-1">
                  <Link className="btn-sm text-zinc-100 bg-darkGreenSavia hover:bg-greenSavia w-full shadow" href="/request-demo">{t('request_demo_btn')}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
