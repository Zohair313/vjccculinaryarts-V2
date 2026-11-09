import { footerGroups } from '../content'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <path
        d="M14.5 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V3h-2.3C11.9 3 11 4.6 11 6.6v1.9H9V11h2v10h3.5V11h2.4l.4-2.5h-2.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="currentColor" />
    </svg>
  )
}

const socials = [
  { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/vjccculinaryarts/' },
  { label: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/' },
  { label: 'YouTube', icon: YoutubeIcon, href: 'https://www.youtube.com/' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div className="col-span-2 max-w-xs lg:col-span-1">
            <a href="#top" className="flex items-center gap-3.5" aria-label="VJCC home">
              <div className="flex h-12 w-auto items-center justify-center rounded-xl bg-white px-2.5 py-1 shadow-md">
                <img
                  src="/images/vjcc-logo.jpg"
                  alt="VJCC logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="font-display text-2xl tracking-tight">VJCC</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-paper/60">
              Vandana Jain Culinary Courses. Where passion meets profession —
              KHDA-approved culinary training in Dubai since 1997.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-paper/15 text-paper/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay hover:bg-clay hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-paper/45">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-underline text-sm text-paper/75 transition-colors duration-300 hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Large editorial typography spanning from left to right */}
        <div className="mt-16 border-t border-paper/10 pt-10 sm:mt-20 sm:pt-14">
          <p className="font-display text-[clamp(2.4rem,8.2vw,7.6rem)] font-light leading-none tracking-tight text-paper/85 select-none text-balance">
            <span className="text-clay">Vandana Jain</span> Culinary
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center">
          <p>© 2026 VJCC. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Latifa Towers, Sheikh Zayed Road, Dubai</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span>KHDA-approved</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
