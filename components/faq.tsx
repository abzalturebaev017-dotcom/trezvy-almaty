import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: 'Как быстро приедет водитель?',
    a: 'В среднем за 15–20 минут по городу. Диспетчер сразу назовёт точное время приезда.',
  },
  {
    q: 'Сколько будет стоить моя поездка?',
    a: 'Стоимость от 25 000 тг в квадрате улиц Аль-Фараби — Саина — Ташкентский — Достык. Точную сумму рассчитывает наше приложение-таксометр по фактическому маршруту.',
  },
  {
    q: 'А если у меня механика или большой внедорожник?',
    a: 'Без проблем. Наши водители уверенно управляют механикой, автоматом, вариатором, внедорожниками и премиум-авто.',
  },
  {
    q: 'Кто отвечает, если что-то случится с машиной?',
    a: 'Мы несём материальную ответственность за автомобиль во время поездки.',
  },
  { q: 'Как оплатить?', a: 'Наличными, Kaspi переводом или на карту после окончания поездки.' },
  {
    q: 'Работаете за городом?',
    a: 'Да — Конаев, Талгар, Иссык, Каскелен и другие направления. Стоимость также считает таксометр.',
  },
]

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-14">
      <SectionHeading id="faq-title" eyebrow="ВОПРОСЫ" title="Коротко о главном" />
      <div className="flex flex-col gap-2">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-card open:border-primary/30">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary"
                aria-hidden="true"
              />
            </summary>
            <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
