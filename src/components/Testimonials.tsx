import { Quote } from 'lucide-react'
import { testimonials } from '../content'

function Card({
  quote,
  name,
  detail,
  duplicate,
}: {
  quote: string
  name: string
  detail: string
  duplicate?: boolean
}) {
  return (
    <figure
      aria-hidden={duplicate || undefined}
      className="card card-lift mx-3 flex w-[300px] shrink-0 flex-col justify-between p-6 sm:w-[360px]"
    >
      <Quote className="size-6 text-clay/70" strokeWidth={1.6} />
      <blockquote className="mt-5 text-[15px] leading-relaxed text-ink-soft">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
        <span className="grid size-9 place-items-center rounded-full bg-paper-deep font-display text-sm">
          {name.charAt(0)}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-medium text-ink">{name}</span>
          <span className="text-xs text-muted">{detail}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden border-y border-line bg-paper-deep/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Student stories</span>
            <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
              Loved by the people who cook here.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Twelve thousand students, one kitchen. A few of the notes they leave
            behind.
          </p>
        </div>
      </div>

      <div className="marquee mt-12">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((item, i) => (
            <Card
              key={`${item.name}-${i}`}
              {...item}
              duplicate={i >= testimonials.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
