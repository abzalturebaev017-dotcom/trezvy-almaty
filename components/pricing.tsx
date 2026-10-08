import Image from 'next/image'
import { MapPin, ShieldCheck, Smartphone } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Taximeter } from './taximeter'

const streets = ['Аль-Фараби', 'Саина', 'Ташкентский', 'Достык']

export function Pricing() {
  return (
    <section id="price" aria-labelledby="price-title" className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-14">
      <SectionHeading id="price-title" eyebrow="СТОИМОСТЬ" title="Честная цена по таксометру" />

      <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card">
        <div className="relative h-44">
          <Image
            src="/images/city.png"
            alt="Ночная карта улиц Алматы с высоты"
            fill
            sizes="(max-width: 640px) 100vw, 576px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 font-mono text-[11px] tracking-widest backdrop-blur">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            БАЗОВАЯ ЗОНА ГОРОДА
          </span>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <p className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground">от</span>
            <span className="font-mono text-5xl font-bold text-primary">25 000</span>
            <span className="text-lg font-bold text-primary">тг</span>
          </p>
          <p className="text-pretty leading-relaxed">
            Стоимость у нас <strong className="text-primary">от 25.000тг</strong> в квадрате улиц{' '}
            <strong>Аль-Фараби — Саина — Ташкентский — Достык</strong>, точная стоимость определяется с помощью
            нашего приложения (таксометр).
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Границы базовой зоны">
            {streets.map((s) => (
              <li
                key={s}
                className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        <li className="flex gap-3 rounded-2xl border border-border bg-card p-4">
          <Smartphone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Считает приложение, а не водитель.</strong> Маршрут фиксируется
            таксометром — итог виден вам на экране.
          </p>
        </li>
        <li className="flex gap-3 rounded-2xl border border-border bg-card p-4">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Без скрытых доплат.</strong> Оплата наличными, Kaspi переводом или
            на карту после поездки.
          </p>
        </li>
      </ul>

      <Taximeter />
    </section>
  )
}
