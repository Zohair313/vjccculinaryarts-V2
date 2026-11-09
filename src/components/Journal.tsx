import { useEffect, useState } from 'react'
import { ArrowUpRight, Clock } from 'lucide-react'
import { journalSections } from '../content'

export default function Journal() {
  const [active, setActive] = useState(journalSections[0].id)

  useEffect(() => {
    const ids = journalSections.map((s) => s.id)
    let frame = 0

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const offset = 180
        let current = ids[0]
        for (const id of ids) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top <= offset) current = id
        }
        setActive(current)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section
      id="journal"
      className="border-y border-line bg-paper-deep/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="eyebrow">From the kitchen</span>
          <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.01]">
            Notes on learning to cook.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            What we teach, why it works, and how to choose the right first
            course — written by the people at the bench.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-muted">
              On this page
            </p>
            <nav
              aria-label="Article contents"
              className="hidden border-l border-line lg:block"
            >
              {journalSections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  data-active={active === section.id}
                  className="toc-link"
                >
                  <span className="mr-2 text-[10px] text-muted/70">
                    0{i + 1}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {journalSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    active === section.id
                      ? 'border-ink bg-ink text-paper'
                      : 'border-line-strong text-muted'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>

            <div className="mt-8 hidden rounded-[18px] border border-line bg-card p-5 lg:block">
              <Clock className="size-4 text-clay" strokeWidth={1.7} />
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                New to the kitchen? Start with the six-day programme and a
                campus visit.
              </p>
              <a
                href="#contact"
                className="link-underline mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-clay"
              >
                Talk to us
                <ArrowUpRight className="size-4" strokeWidth={1.8} />
              </a>
            </div>
          </aside>

          <article className="max-w-2xl">
            <div className="zoom-frame card mb-10 overflow-hidden p-0">
              <img
                src="/images/gallery-1.jpg"
                alt="A VJCC workshop in progress"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-lg leading-relaxed text-ink-soft">
              The best cooking schools do not teach recipes. They teach you how
              to look at a pan, a dough or a sauce and know what to do next.
              That is the whole idea behind every course at VJCC.
            </p>

            {journalSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 pt-10"
              >
                <h3 className="text-2xl tracking-tight sm:text-[28px]">
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-4 text-[15px] leading-relaxed text-ink-soft"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <blockquote className="mt-12 border-l-2 border-clay pl-6">
              <p className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
                “Watch once, do it yourself, then do it again.”
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
                Vandana Jain
              </footer>
            </blockquote>
          </article>
        </div>
      </div>
    </section>
  )
}
