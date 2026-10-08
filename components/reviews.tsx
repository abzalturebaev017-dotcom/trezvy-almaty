import { Quote, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const reviews = [
  {
    text: 'Вызвал в час ночи с Достык. Водитель был через 12 минут, доехали спокойно, машина цела. Цену показал в приложении — как договаривались.',
    name: 'Айдос',
    area: 'Медеуский район',
  },
  {
    text: 'Муж не мог вести, я тоже. Приятный водитель, помог даже с парковкой во дворе. Теперь только к вам.',
    name: 'Динара',
    area: 'Бостандыкский район',
  },
  {
    text: 'Механика на моей старой Camry — сел и поехал без вопросов. Никаких лишних разговоров, ровная езда.',
    name: 'Сергей',
    area: 'Аль-Фараби',
  },
]

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-14">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading id="reviews-title" eyebrow="ОТЗЫВЫ" title="Что говорят клиенты" />
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-primary/15 px-3 py-1.5 font-mono text-sm font-bold text-primary">
          <Star className="size-4 fill-primary" aria-hidden="true" />
          4.9
        </span>
      </div>
      <ul className="flex flex-col gap-3">
        {reviews.map((r) => (
          <li key={r.name} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <Quote className="size-5 text-primary" aria-hidden="true" />
              <span className="flex gap-0.5" aria-label="5 из 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </span>
            </div>
            <blockquote className="text-pretty leading-relaxed">{r.text}</blockquote>
            <p className="text-sm">
              <span className="font-bold">{r.name}</span>
              <span className="text-muted-foreground"> · {r.area}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
