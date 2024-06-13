import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { useTranslations } from 'next-intl'
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface Option {
  country: string;
  code: string;
}

export default function Header() {

  const t = useTranslations("index")

  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  const options: Option[] = [
    { country: "English", code: "en" },
    { country: "Español", code: "es" },
  ];

  const setOption = (option: Option) => {
    setIsOptionsExpanded(false);
    router.push(`/${option.code}`);
  };

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
                <li>
                  <div className="flex items-center justify-center bg-gray-100">
                    <div className="ml-5 relative text-lg w-48">
                      <button
                        className="btn-sm w-min text-zinc-100 bg-darkGreenSavia hover:bg-greenSavia dark:bg-darkGreenSavia dark:hover:bg-greenSavia"
                        onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
                        onBlur={() => setIsOptionsExpanded(false)}
                      >
                        {t('header_language_selector')}
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={`h-4 w-4 transform transition-transform duration-200 ease-in-out ${isOptionsExpanded ? "rotate-180" : "rotate-0"
                            }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`transition-transform duration-500 ease-custom ${!isOptionsExpanded
                          ? "-translate-y-1/2 scale-y-0 opacity-0"
                          : "translate-y-0 scale-y-100 opacity-100"
                          }`}
                      >
                        <ul className="absolute left-0 right-0 w-min mb-4 flex flex-wrap bg-white divide-y rounded-lg shadow-lg overflow-hidden">
                          {options.map((option, index) => (
                            <li
                              key={index}
                              className="btn-sm transition-colors duration-300 hover:bg-gray-200 flex items-center cursor-pointer"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setOption(option);
                              }}
                              onClick={() => setIsOptionsExpanded(false)}
                            >
                              &nbsp;&nbsp;{option.country}
                              {pathname === `/${option.code}` && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className=" h-7 text-greenSavia ml-auto"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
