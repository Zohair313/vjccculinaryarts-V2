import { useState } from 'react'
import { Award, Check, ChefHat } from 'lucide-react'
import { founderTabs } from '../content'
import CountUp from './CountUp'

export default function FounderTabs() {
  const [active, setActive] = useState(founderTabs[0].id)
  const tab = founderTabs.find((t) => t.id === active) ?? founderTabs[0]

  return (
    <section id="founder" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="eyebrow">Meet the founder</span>
          <h2 className="mt-4 max-w-lg text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.01]">
            The chef behind the school.
          </h2>

          <div
            role="tablist"
            aria-label="About Vandana Jain"
            className="mt-8 flex flex-wrap gap-2"
          >
            {founderTabs.map((item) => (
              <button
                key={item.id}
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={active === item.id}
                aria-controls={`panel-${item.id}`}
                onClick={() => setActive(item.id)}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                  active === item.id
                    ? 'border-clay bg-clay text-white shadow-xs'
                    : 'border-line-strong bg-transparent text-ink-soft hover:border-clay/40 hover:bg-card'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className="enter mt-8"
          >
            <h3 className="text-2xl tracking-tight sm:text-3xl">{tab.title}</h3>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              {tab.body}
            </p>
            <ul className="mt-6 space-y-3">
              {tab.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sage text-white shadow-2xs">
                    <Check className="size-3" strokeWidth={2.6} />
                  </span>
                  <span className="text-ink-soft">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="zoom-frame card overflow-hidden p-0">
            <img
              key={tab.image}
              src={tab.image}
              alt={tab.caption}
              className="enter aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="card card-lift absolute -bottom-6 left-6 flex items-center gap-3 bg-card/95 px-5 py-4 backdrop-blur-md border border-line-strong sm:left-8">
            <span className="grid size-10 place-items-center rounded-full bg-sage/20 text-sage">
              <Award className="size-5" strokeWidth={2} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl">
                <CountUp value={175} suffix="+" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                awards
              </span>
            </span>
          </div>

          <span className="absolute -right-2 -top-4 grid size-12 place-items-center rounded-full border border-line bg-card text-clay shadow-sm sm:-right-4">
            <ChefHat className="size-5" strokeWidth={1.6} />
          </span>
        </div>
      </div>
    </section>
  )
}
