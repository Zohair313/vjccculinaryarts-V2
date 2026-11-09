import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import CountUp from './CountUp'

const facts = [
  { value: 12000, suffix: '+', label: 'students trained' },
  { value: 86, suffix: '+', label: 'certified courses' },
  { value: 7, label: 'world cuisines' },
  { value: 28, suffix: ' yrs', label: 'of teaching' },
]

const slides = [
  {
    src: '/images/hero-students.jpg',
    alt: 'Students cooking together at VJCC culinary school in Dubai',
    label: 'Hands-on classes',
  },
  {
    src: '/images/gallery-1.jpg',
    alt: 'A finished dish from the VJCC kitchen',
    label: 'Plating & presentation',
  },
  {
    src: '/images/why-choose.jpg',
    alt: 'Chef instructor guiding students in the VJCC kitchen',
    label: 'Chef-led training',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Fresh ingredients prepared for a VJCC class',
    label: 'Real ingredients',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Students and bakes from the VJCC baking studio',
    label: 'Baking studio',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4200,
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="top" className="relative isolate overflow-hidden bg-paper">
      <div className="grain" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-24 pt-28 sm:pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-x-16 lg:gap-y-0 lg:pb-28 lg:pt-36">
        <div className="text-center lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left">
          <h1
            className="enter display mx-auto max-w-2xl text-[clamp(2.6rem,8vw,5.2rem)] text-balance lg:mx-0"
            style={{ animationDelay: '0.08s' }}
          >
            Become an expert
            <br className="hidden sm:block" /> professional{' '}
            <em className="not-italic text-clay">chef.</em>
          </h1>

          <p
            className="enter mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0"
            style={{ animationDelay: '0.18s' }}
          >
            Hands-on cooking and baking classes in Dubai’s most loved culinary
            studio. Learn from award-winning chefs, master global cuisines, and
            leave with a certificate — and a kitchen you actually trust.
          </p>

          <div
            className="enter mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            style={{ animationDelay: '0.28s' }}
          >
            <a href="#courses" className="btn btn-primary w-full sm:w-auto">
              Explore courses
              <ArrowUpRight className="size-4" strokeWidth={1.8} />
            </a>
            <a href="#contact" className="btn btn-ghost w-full sm:w-auto">
              Book a campus visit
            </a>
          </div>
        </div>

        <div
          className="enter relative order-2 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
          style={{ animationDelay: '0.22s' }}
        >
          <div
            className="absolute -inset-2 rounded-[30px] border border-line-strong/60 sm:-inset-3"
            aria-hidden="true"
          />

          <div
            className="card relative overflow-hidden p-0"
            aria-roledescription="carousel"
            aria-label="Inside the VJCC kitchen"
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/5]">
              {slides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={i === index ? slide.alt : ''}
                  aria-hidden={i === index ? undefined : true}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-out ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-full bg-card/95 px-4 py-2.5 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
              <span className="flex min-w-0 items-center gap-2 text-xs font-medium text-ink">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-sage" />
                </span>
                <span className="truncate">{slides[index].label}</span>
              </span>

              <span className="flex shrink-0 items-center">
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${slide.label}`}
                    aria-current={i === index}
                    className="group grid h-7 place-items-center px-1"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? 'w-5 bg-clay'
                          : 'w-1.5 bg-line-strong group-hover:bg-muted'
                      }`}
                    />
                  </button>
                ))}
              </span>
            </div>
          </div>
        </div>

        <dl
          className="enter order-3 mx-auto grid w-full max-w-lg grid-cols-2 gap-x-6 gap-y-7 border-t border-line/80 pt-8 sm:grid-cols-4 lg:order-none lg:col-start-1 lg:row-start-2 lg:mx-0 lg:mt-10 lg:max-w-none lg:self-start lg:pt-8"
          style={{ animationDelay: '0.38s' }}
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display text-2xl tracking-tight sm:text-3xl">
                <CountUp value={fact.value} suffix={fact.suffix} />
              </dd>
              <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#testimonials"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-ink lg:flex"
      >
        Scroll
        <ArrowDown className="size-3.5 animate-bounce" strokeWidth={1.8} />
      </a>
    </section>
  )
}
