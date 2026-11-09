import { useEffect, useState } from 'react'
import { Cookie, X } from 'lucide-react'

const KEY = 'vjcc-cookie-consent'

type Prefs = {
  analytics: boolean
  marketing: boolean
}

function Toggle({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string
  desc: string
  checked: boolean
  disabled?: boolean
  onChange?: (value: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-xs font-medium text-ink">{label}</p>
        <p className="text-[11px] text-muted">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
          checked ? 'bg-sage' : 'bg-line-strong'
        } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        <span
          className={`absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [prefs, setPrefs] = useState<Prefs>({
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(KEY)
    } catch {
      stored = null
    }
    if (stored) return

    const timer = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(timer)
  }, [])

  const close = (choice: string, finalPrefs: Prefs = prefs) => {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ choice, ...finalPrefs, at: Date.now() }),
      )
    } catch {
      // storage unavailable — the banner still closes for this session
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-30 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[380px]"
    >
      <div
        className="card enter bg-card/95 p-5 shadow-[0_24px_60px_-30px_rgba(33,28,21,0.6)] backdrop-blur-md"
        style={{ animationDelay: '0.05s' }}
      >
        <div className="flex items-start gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-clay-soft text-clay-deep">
            <Cookie className="size-[18px]" strokeWidth={1.8} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-ink">
              Cookies, but the useful kind.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              We use them to keep the site working and to see which courses
              people actually look at. No creepy tracking.
            </p>
          </div>
          <button
            type="button"
            onClick={() => close('dismissed')}
            aria-label="Dismiss cookie banner"
            className="grid size-8 shrink-0 place-items-center rounded-full text-muted transition-colors duration-300 hover:bg-paper-deep hover:text-ink"
          >
            <X className="size-4" strokeWidth={1.8} />
          </button>
        </div>

        {settingsOpen && (
          <div className="mt-4 space-y-3 rounded-xl border border-line bg-paper/70 p-3">
            <Toggle
              label="Essential"
              desc="Always on — needed to run the site"
              checked
              disabled
            />
            <Toggle
              label="Analytics"
              desc="Anonymous page and course interest"
              checked={prefs.analytics}
              onChange={(analytics) => setPrefs((p) => ({ ...p, analytics }))}
            />
            <Toggle
              label="Marketing"
              desc="Occasional course offers"
              checked={prefs.marketing}
              onChange={(marketing) => setPrefs((p) => ({ ...p, marketing }))}
            />
            <button
              type="button"
              onClick={() => close('custom', prefs)}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-clay px-4 text-xs font-medium text-white transition-colors duration-300 hover:bg-clay-deep shadow-xs"
            >
              Save preferences
            </button>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() =>
              close('accepted', { analytics: true, marketing: true })
            }
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-clay px-4 text-xs font-medium text-white transition-colors duration-300 hover:bg-clay-deep shadow-xs"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() =>
              close('rejected', { analytics: false, marketing: false })
            }
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-line-strong px-4 text-xs font-medium text-ink transition-colors duration-300 hover:bg-paper-deep"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setSettingsOpen((v) => !v)}
            aria-expanded={settingsOpen}
            className="link-underline ml-auto text-xs text-muted transition-colors duration-300 hover:text-ink"
          >
            {settingsOpen ? 'Hide settings' : 'Settings'}
          </button>
        </div>
      </div>
    </div>
  )
}
