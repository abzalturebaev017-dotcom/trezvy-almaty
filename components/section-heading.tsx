export function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-mono text-xs tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 id={id} className="text-balance text-3xl font-extrabold leading-tight tracking-tight">
        {title}
      </h2>
    </div>
  )
}
