import { useState } from 'react'
import { ArrowUpRight, Check, Clock, MapPin, Phone } from 'lucide-react'

const fieldClass =
  'w-full rounded-xl border border-line-strong bg-card px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors duration-300 focus:border-clay focus:outline-none'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Visit us</span>
          <h2 className="mt-4 text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.0]">
            Start with a visit.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Tell us what you would like to cook. We will reply with the next
            available batch, a campus tour, or a private workshop menu.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="card p-6 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  Name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  Phone <span className="normal-case tracking-normal">(optional)</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+971"
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  Interested in
                </span>
                <select name="course" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Choose a course
                  </option>
                  <option>6-Day Culinary Arts</option>
                  <option>Junior Chef Programme</option>
                  <option>Cake Level 1</option>
                  <option>5-Day Baking</option>
                  <option>11-Day Baking Diploma</option>
                  <option>Oven Fresh Breads</option>
                  <option>Private or corporate workshop</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Anything we should know before we reply?"
                  className={`${fieldClass} resize-none`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-6 w-full"
              disabled={sent}
            >
              {sent ? (
                <>
                  Request sent
                  <Check className="size-4" strokeWidth={2} />
                </>
              ) : (
                <>
                  Request a callback
                  <ArrowUpRight className="size-4" strokeWidth={1.8} />
                </>
              )}
            </button>

            {sent && (
              <p className="mt-3 text-center text-xs text-muted">
                Thank you — our admissions team will be in touch within one
                working day.
              </p>
            )}
          </form>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[26px] border border-line">
          <iframe
            title="Map showing VJCC on Sheikh Zayed Road, Dubai"
            src="https://maps.google.com/maps?q=Latifa+Towers,+Sheikh+Zayed+Road,+Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-[380px] w-full grayscale-[0.15] contrast-[1.02]"
            loading="lazy"
          />

          <div className="card absolute bottom-4 left-4 right-4 max-w-sm p-5 sm:bottom-6 sm:left-6 sm:right-auto">
            <p className="flex items-start gap-2 text-sm text-ink-soft">
              <MapPin className="mt-0.5 size-4 shrink-0 text-clay" strokeWidth={1.8} />
              Latifa Towers, 1202, 12th floor, Sheikh Zayed Road, Dubai
            </p>
            <div className="mt-3 space-y-2 text-sm text-ink-soft">
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-clay" strokeWidth={1.8} />
                +971 50 750 6291
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-clay" strokeWidth={1.8} />
                Mon–Sat 9:00–18:00 · Sun 10:00–17:00
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Latifa+Towers+Sheikh+Zayed+Road+Dubai"
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-clay"
            >
              Get directions
              <ArrowUpRight className="size-4" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
