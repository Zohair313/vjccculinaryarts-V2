import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#founder' },
  { label: 'Courses', href: '#courses' },
  { label: 'Journal', href: '#journal' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-line/80 bg-card/80 py-2 pl-3 pr-2 backdrop-blur-xl transition-shadow duration-500 ${
            scrolled
              ? 'shadow-[0_18px_50px_-24px_rgba(20,35,26,0.55)]'
              : 'shadow-[0_10px_30px_-24px_rgba(20,35,26,0.4)]'
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-full py-1 pr-2"
            aria-label="VJCC home"
          >
            <div className="flex h-10 w-auto items-center justify-center rounded-xl bg-white px-2 py-1 border border-line-strong/70 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/vjcc-logo.jpg"
                alt="VJCC logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-medium tracking-tight">
                VJCC
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.18em] text-muted">
                Culinary Arts · Dubai
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13px] text-ink-soft transition-colors duration-300 hover:bg-paper-deep hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="btn btn-primary hidden px-5 py-2.5 text-[13px] sm:inline-flex"
            >
              Enroll now
              <ArrowUpRight className="size-4" strokeWidth={1.8} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:bg-paper-deep md:hidden"
            >
              {open ? (
                <X className="size-5" strokeWidth={1.8} />
              ) : (
                <Menu className="size-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-28 md:hidden">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 font-display text-3xl tracking-tight"
                >
                  {link.label}
                  <span className="text-xs font-sans tracking-[0.2em] text-muted">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            Enroll now
            <ArrowUpRight className="size-4" strokeWidth={1.8} />
          </a>
          <p className="mt-auto pt-8 text-sm text-muted">
            Latifa Towers, Sheikh Zayed Road, Dubai
          </p>
        </div>
      )}
    </>
  )
}
