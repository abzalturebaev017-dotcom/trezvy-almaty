import { Clock, MapPin, Phone } from 'lucide-react'
import { PHONE_DISPLAY } from '@/lib/contacts'
import { TrackedPhoneLink, TrackedWhatsAppLink } from './tracked-link'
import { WhatsAppIcon } from './whatsapp-icon'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-xl px-5 py-10">
      <div className="flex flex-col gap-5 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-6">
        <h2 className="text-balance text-2xl font-extrabold leading-tight">
          Не рискуйте правами и жизнью. Один звонок — и вы дома.
        </h2>
        <p className="text-sm text-muted-foreground">Диспетчер на линии круглосуточно, включая праздники.</p>
        <TrackedPhoneLink
          place="final_cta_phone"
          className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary font-mono text-base font-bold text-primary-foreground active:scale-[0.98]"
        >
          <Phone className="size-5" />
          {PHONE_DISPLAY}
        </TrackedPhoneLink>
        <TrackedWhatsAppLink
          place="final_cta_wa"
          className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--whatsapp)] font-bold text-background active:scale-[0.98]"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </TrackedWhatsAppLink>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-xl flex-col gap-5 px-5 pt-6 pb-32">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
          ТВ
        </span>
        <span className="font-bold">Трезвый водитель Алматы</span>
      </div>
      <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
        <li className="flex items-center gap-3">
          <Clock className="size-4 text-primary" aria-hidden="true" />
          Круглосуточно, 7 дней в неделю
        </li>
        <li className="flex items-center gap-3">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          Алматы и пригород
        </li>
        <li>
          <TrackedPhoneLink place="footer_phone" className="flex min-h-11 items-center gap-3 font-mono text-foreground">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {PHONE_DISPLAY}
          </TrackedPhoneLink>
        </li>
      </ul>
      <p className="border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
        © {new Date().getFullYear()} Трезвый водитель Алматы. Сервис доставки водителя к вашему автомобилю.
        Стоимость поездки определяется таксометром.
      </p>
    </footer>
  )
}

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl">
      <div className="mx-auto flex max-w-xl gap-3">
        <TrackedPhoneLink
          place="sticky_phone"
          className="flex h-13 flex-1 items-center justify-center gap-2 rounded-2xl bg-primary font-bold text-primary-foreground active:scale-[0.98]"
        >
          <Phone className="size-5" />
          Позвонить
        </TrackedPhoneLink>
        <TrackedWhatsAppLink
          place="sticky_wa"
          aria-label="Написать в WhatsApp"
          className="flex size-13 items-center justify-center rounded-2xl bg-[var(--whatsapp)] text-background active:scale-[0.98]"
        >
          <WhatsAppIcon className="size-6" />
        </TrackedWhatsAppLink>
      </div>
    </div>
  )
}
