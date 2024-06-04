"use client"

import Counter from '@/src/components/counter'
import { useTranslations } from 'next-intl'
interface StatProps {
  number: number
  suffix: string
  text: string
}

export default function Stats() {

  const t = useTranslations("index")

  const stats: StatProps[] = [
    {
      number: 33,
      suffix: '%',
      text: t('stat_1'),
    },
    {
      number: 350,
      suffix: '%',
      text: t('stat_2'),
    }
    // {
    //   number: 1.5,
    //   suffix: 'M+',
    //   text: 'Assets packed with power beyond your imagination.',
    // },
    // {
    //   number: 192,
    //   suffix: 'K',
    //   text: 'Assets packed with power beyond your imagination.',
    // },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-sm mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-2 md:-mx-5 md:gap-0 items-start md:max-w-none">

        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="font-inter-tight text-2xl md:text-3xl font-bold text-darkGreenSavia tabular-nums mb-2">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>
            <p className="text-sm text-darkGreenSavia">{stat.text}</p>
          </div>
        ))}

      </div>
    </div>
  )
}