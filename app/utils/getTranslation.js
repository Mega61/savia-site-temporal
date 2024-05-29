"use client"

import { usePathname } from "next/navigation";
import esCO from '../../public/locales/es-CO/content.json'
import enUS from '../../public/locales/en-US/content.json'

const translations = {
    'en-US': enUS,
    'es-CO': esCO,
}

function getLocaleFromPath(pathname) {
    const segments = pathname.split('/')
    return segments[0] // Assuming the locale is the first segment of the path
}

export function useTranslation() {
    const pathname = usePathname()
    const locale = getLocaleFromPath(pathname)
    const translation = translations[locale] || translations['es-CO']
    return translation
}