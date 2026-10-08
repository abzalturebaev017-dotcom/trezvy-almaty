import { Briefcase, Car, Clock, GlassWater, Plane, Route } from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  { icon: GlassWater, title: 'После застолья', text: 'Ресторан, свадьба, день рождения — довезём вас и авто домой.' },
  { icon: Route, title: 'Межгород', text: 'Конаев, Талгар, Иссык, Чунджа — за рулём вашего автомобиля.' },
  { icon: Car, title: 'Любая коробка', text: 'Механика, автомат, кроссоверы, минивэны и премиум-класс.' },
  { icon: Clock, title: 'Водитель на час', text: 'Устали или нет прав на руках — водитель на нужное время.' },
  { icon: Briefcase, title: 'Корпоративам', text: 'Обслужим мероприятие: несколько водителей одновременно.' },
  { icon: Plane, title: 'В аэропорт', text: 'Ранние рейсы: доставим и оставим авто на нужной парковке.' },
]

export function Services() {
  return (
    <section aria-labelledby="services-title" className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-14">
      <SectionHeading id="services-title" eyebrow="УСЛУГИ" title="Работаем в любой ситуации" />
      <ul className="grid grid-cols-2 gap-3">
        {services.map((s) => (
          <li key={s.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15">
              <s.icon className="size-5 text-primary" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-bold">{s.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
