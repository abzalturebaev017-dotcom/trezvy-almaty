import Image from 'next/image'
import { Home, KeyRound, PhoneCall } from 'lucide-react'
import { SectionHeading } from './section-heading'

const steps = [
  {
    icon: PhoneCall,
    title: 'Звонок или WhatsApp',
    text: 'Назовите адрес и марку авто. Диспетчер подтвердит время приезда за минуту.',
  },
  {
    icon: KeyRound,
    title: 'Водитель у вашего авто',
    text: 'Приезжает трезвый водитель с правами и стажем, включает таксометр при старте поездки.',
  },
  {
    icon: Home,
    title: 'Вы дома, авто во дворе',
    text: 'Спокойная поездка по вашему маршруту. Оплата наличными, Kaspi или переводом.',
  },
]

export function Steps() {
  return (
    <section aria-labelledby="steps-title" className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-14">
      <SectionHeading id="steps-title" eyebrow="КАК ЭТО РАБОТАЕТ" title="Три шага до безопасной дороги домой" />
      <ol className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
            <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <step.icon className="size-5 text-primary" aria-hidden="true" />
              <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-bold text-primary-foreground">
                {i + 1}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
        <Image
          src="/images/keys.png"
          alt="Передача ключей от автомобиля водителю"
          fill
          sizes="(max-width: 640px) 100vw, 576px"
          className="object-cover"
        />
      </div>
    </section>
  )
}
