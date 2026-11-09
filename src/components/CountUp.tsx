import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

const format = (value: number, decimals: number) =>
  value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1600,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion() ? value : 0,
  )

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(value * eased)
          if (progress < 1) requestAnimationFrame(tick)
          else setDisplay(value)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span>
      <span ref={ref} aria-hidden="true">
        {prefix}
        {format(display, decimals)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {format(value, decimals)}
        {suffix}
      </span>
    </span>
  )
}
