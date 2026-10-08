import Image from 'next/image'
import { BadgeCheck, EyeOff, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: BadgeCheck,
    title: 'Проверенные водители',
    text: 'Стаж от 10 лет, водительское удостоверение и проверка перед сменой.',
  },
  {
    icon: EyeOff,
    title: 'Полная конфиденциальность',
    text: 'Ни адресов, ни историй. Водитель молчит, если вы не хотите разговаривать.',
  },
  {
    icon: ShieldCheck,
    title: 'Аккуратно с вашим авто',
    text: 'Плавная езда, аккуратная парковка. Материальная ответственность за авто.',
  },
]

export function Drivers() {
  return (
    <section aria-labelledby="drivers-title" className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-14">
      <SectionHeading id="drivers-title" eyebrow="НАШИ ВОДИТЕЛИ" title="За руль сядет тот, кому доверяют" />
      <figure className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="relative aspect-[4/5]">
          <Image
            src="/images/driver.png"
            alt="Ерлан, водитель ночной смены, за рулём автомобиля"
            fill
            sizes="(max-width: 640px) 100vw, 576px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
        </div>
        <figcaption className="-mt-16 relative flex items-end justify-between gap-3 p-5">
          <div>
            <p className="text-lg font-bold">Ерлан</p>
            <p className="text-sm text-muted-foreground">Водитель ночной смены</p>
          </div>
          <div className="flex gap-2 font-mono text-xs">
            <span className="rounded-lg bg-background/80 px-2.5 py-1.5 backdrop-blur">14 лет</span>
            <span className="rounded-lg bg-background/80 px-2.5 py-1.5 backdrop-blur">3 100+</span>
          </div>
        </figcaption>
      </figure>
      <ul className="flex flex-col gap-3">
        {features.map((f) => (
          <li key={f.title} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <f.icon className="size-5 text-primary" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
