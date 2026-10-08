import Image from 'next/image'
import { Phone } from 'lucide-react'
import { PHONE_DISPLAY } from '@/lib/contacts'
import { TrackedPhoneLink, TrackedWhatsAppLink } from './tracked-link'
import { WhatsAppIcon } from './whatsapp-icon'

const stats = [
  { value: '15 мин', label: 'средний приезд' },
  { value: '10+ лет', label: 'стаж водителей' },
  { value: '4.9', label: 'оценка клиентов' },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Трезвый водитель открывает дверь автомобиля ночью в Алматы"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      <header className="mx-auto flex max-w-xl items-center justify-between px-5 pt-5">
        <a href="#" className="flex items-center gap-3" aria-label="Трезвый водитель Алматы — на главную">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
            ТВ
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold">Трезвый водитель</span>
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground">АЛМАТЫ · 24/7</span>
          </span>
        </a>
        <TrackedPhoneLink
          place="hero_header"
          aria-label={`Позвонить ${PHONE_DISPLAY}`}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur"
        >
          <Phone className="size-5 text-primary" />
        </TrackedPhoneLink>
      </header>

      <div className="mx-auto flex max-w-xl flex-col gap-6 px-5 pt-24 pb-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-[11px] tracking-widest text-foreground backdrop-blur">
          <span className="pulse-dot relative size-2 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp)]" />
          ВОДИТЕЛИ НА СМЕНЕ СЕЙЧАС
        </span>

        <h1 className="text-balance text-[40px] font-extrabold leading-[1.05] tracking-tight">
          Трезвый водитель <span className="text-primary">в Алматы 24/7</span>
        </h1>

        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          Отдохнули — не садитесь за руль. Наш водитель приедет к вам и довезёт вас и ваш автомобиль до дома
          аккуратно, тихо и без нравоучений.
        </p>

        <div className="flex flex-col gap-3">
          <TrackedPhoneLink
            place="hero_cta"
            className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/60 transition-transform active:scale-[0.98]"
          >
            <Phone className="size-5" />
            Вызвать водителя
          </TrackedPhoneLink>
          <TrackedWhatsAppLink
            place="hero_cta"
            className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-border bg-card/70 text-base font-semibold backdrop-blur transition-transform active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-5 text-[var(--whatsapp)]" />
            Написать в WhatsApp
          </TrackedWhatsAppLink>
          <TrackedPhoneLink place="hero_number" className="py-2 text-center font-mono text-sm tracking-wider text-muted-foreground">
            {PHONE_DISPLAY}
          </TrackedPhoneLink>
        </div>

        <dl className="grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/70 py-4 backdrop-blur">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-2 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-mono text-lg font-bold">{s.value}</dd>
              <dd className="text-[11px] text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
