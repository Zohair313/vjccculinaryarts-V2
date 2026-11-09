import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Plus } from 'lucide-react'
import { courses } from '../content'
import CoursesSkeleton from './CoursesSkeleton'

export default function CoursesAccordion() {
  const [open, setOpen] = useState<string | null>(courses[0].id)
  const [hovered, setHovered] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  // Currently focused or hovered course (falls back to open course, then first course)
  const activeCourse =
    courses.find((c) => c.id === (hovered ?? open ?? courses[0].id)) ?? courses[0]

  return (
    <section
      id="courses"
      aria-busy={loading}
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">Signature courses</span>
          <h2 className="mt-4 max-w-xl text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.01]">
            Find your bench.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Six of our most-booked programmes. Hover any course to preview the kitchen bench, or expand to inspect the full syllabus.
        </p>
      </div>

      {loading ? (
        <CoursesSkeleton />
      ) : (
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.14fr_0.86fr] lg:items-start lg:gap-12">
          {/* Left: Accordion list with hover preview triggers */}
          <div className="border-t border-line">
            {courses.map((course, index) => {
              const isOpen = open === course.id
              const isSelected = activeCourse.id === course.id

              return (
                <div
                  key={course.id}
                  data-open={isOpen}
                  onMouseEnter={() => setHovered(course.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`border-b border-line transition-colors duration-300 ${
                    isSelected ? 'bg-card/60' : 'hover:bg-card/40'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : course.id)}
                      onFocus={() => setHovered(course.id)}
                      onBlur={() => setHovered(null)}
                      aria-expanded={isOpen}
                      aria-controls={`course-panel-${course.id}`}
                      className="group flex w-full items-center gap-3 py-5 text-left sm:gap-5 sm:py-6"
                    >
                      <span className="w-7 shrink-0 font-display text-sm text-muted">
                        0{index + 1}
                      </span>

                      {/* Small thumbnail that expands and highlights on hover */}
                      <div className="hidden size-14 shrink-0 overflow-hidden rounded-xl border border-line bg-paper-deep transition-all duration-300 group-hover:scale-105 group-hover:border-clay/60 sm:block">
                        <img
                          src={course.image}
                          alt=""
                          aria-hidden="true"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] uppercase tracking-[0.18em] text-clay">
                          {course.kicker}
                        </span>
                        <span className="mt-1 block font-display text-lg leading-tight tracking-tight transition-colors duration-300 group-hover:text-clay sm:text-2xl">
                          {course.title}
                        </span>
                        <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                          <span>{course.duration}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-ink-soft">{course.price}</span>
                        </span>
                      </span>

                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? 'border-clay bg-clay text-white'
                            : 'border-line-strong text-ink group-hover:border-clay group-hover:bg-clay group-hover:text-white'
                        }`}
                      >
                        <Plus className="acc-chevron size-4" strokeWidth={1.9} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`course-panel-${course.id}`}
                    role="region"
                    data-open={isOpen}
                    className="acc-panel"
                  >
                    <div>
                      <div className="pb-8 pl-0 sm:pl-12">
                        <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">
                          {course.description}
                        </p>
                        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {course.includes.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2.5 text-sm text-ink-soft"
                            >
                              <span className="grid size-4 place-items-center rounded-full bg-sage text-white">
                                <Check className="size-2.5" strokeWidth={3} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                          <a
                            href="#contact"
                            className="btn btn-primary text-xs"
                          >
                            Reserve a seat
                            <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
                          </a>
                        </div>

                        {/* Inline photo preview on mobile / tablet (< lg) */}
                        <div className="zoom-frame mt-6 overflow-hidden rounded-[16px] border border-line lg:hidden">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="aspect-[16/10] w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Sticky Live Image Preview on Desktop (Reveals on Hover) */}
          <div className="sticky top-28 hidden lg:block">
            <div className="card card-lift relative overflow-hidden rounded-[24px] p-0 shadow-xl border-line-strong/80">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
                {courses.map((course) => {
                  const isCurActive = activeCourse.id === course.id
                  return (
                    <img
                      key={course.id}
                      src={course.image}
                      alt={course.title}
                      loading="eager"
                      className={`absolute inset-0 size-full object-cover transition-all duration-700 ease-out ${
                        isCurActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
