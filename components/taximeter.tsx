'use client'

import { useEffect, useState } from 'react'
import { Play, RotateCcw, Square } from 'lucide-react'

const BASE = 25000
const PER_SECOND_KM = 0.12
const FREE_KM = 5
const PER_KM = 600

function format(n: number) {
  return Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ')
}

export function Taximeter() {
  const [running, setRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  const km = seconds * PER_SECOND_KM
  const price = BASE + Math.max(0, km - FREE_KM) * PER_KM
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  const hour = new Date().getHours()
  const tariff = hour >= 22 || hour < 6 ? 'ночь' : 'день'
  const status = running ? 'В ПУТИ' : seconds > 0 ? 'ПАУЗА' : 'ОЖИДАНИЕ'

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-gradient-to-b from-card to-background p-5">
      <div className="flex items-center justify-between font-mono text-[11px] tracking-widest">
        <span className="text-muted-foreground">ТАКСОМЕТР · ДЕМО</span>
        <span className="flex items-center gap-2 text-primary" aria-live="polite">
          <span className={`relative size-2 rounded-full bg-primary ${running ? 'pulse-dot text-primary' : ''}`} />
          {status}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground">К ОПЛАТЕ</span>
        <p className="flex items-baseline gap-2">
          <span className="font-mono text-5xl font-bold tabular-nums text-primary">{format(price)}</span>
          <span className="text-lg font-bold text-primary">тг</span>
        </p>
      </div>

      <dl className="grid grid-cols-3 gap-2">
        {[
          { k: 'Дистанция', v: `${km.toFixed(1)} км` },
          { k: 'Время', v: `${mm}:${ss}` },
          { k: 'Тариф', v: tariff },
        ].map((x) => (
          <div key={x.k} className="rounded-xl border border-border bg-background/60 p-3">
            <dt className="text-[11px] text-muted-foreground">{x.k}</dt>
            <dd className="font-mono text-base font-bold tabular-nums">{x.v}</dd>
          </div>
        ))}
      </dl>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary font-bold text-primary-foreground transition-transform active:scale-[0.98]"
        >
          {running ? <Square className="size-4" /> : <Play className="size-4" />}
          {running ? 'Остановить' : seconds > 0 ? 'Продолжить' : 'Запустить демо'}
        </button>
        <button
          type="button"
          onClick={() => {
            setRunning(false)
            setSeconds(0)
          }}
          aria-label="Сбросить таксометр"
          className="flex size-12 items-center justify-center rounded-xl border border-border bg-background/60"
        >
          <RotateCcw className="size-4" />
        </button>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Это наглядная демонстрация. В реальной поездке таксометр в приложении водителя считает фактический маршрут
        — вы видите итоговую сумму на экране.
      </p>
    </div>
  )
}
