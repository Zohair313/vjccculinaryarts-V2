import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { faqs } from '../content'

export default function FaqChat() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <span className="eyebrow justify-center">Questions</span>
        <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.01]">
          Ask us anything.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          The things students ask before their first class — answered the way we
          would answer them over WhatsApp.
        </p>
      </div>

      <div className="mt-12 rounded-[26px] border border-line bg-paper-deep/40 p-5 sm:p-8">
        <div className="mb-6 flex items-center gap-3 border-b border-line pb-5">
          <span className="grid size-10 place-items-center rounded-full bg-sage text-white shadow-xs">
            <MessageCircle className="size-5" strokeWidth={1.8} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-medium">VJCC admissions</p>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              <span className="size-2 rounded-full bg-sage animate-pulse" />
              Usually replies in a few minutes
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="space-y-3">
              <div className="flex justify-end">
                <div className="bubble bubble-q">{faq.question}</div>
              </div>
              <div className="flex items-end gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-clay text-white font-display text-xs font-semibold shadow-xs">
                  VJ
                </span>
                <div className="bubble bubble-a">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            Still deciding? We are happy to talk it through.
          </p>
          <a href="#contact" className="btn btn-primary">
            Message us
            <ArrowUpRight className="size-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  )
}
