export default function CoursesSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div
      className="mt-12 grid gap-10 lg:grid-cols-[1.14fr_0.86fr] lg:items-start lg:gap-12"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">Loading courses…</span>

      {/* Left skeleton list */}
      <div className="border-t border-line">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="border-b border-line" aria-hidden="true">
            <div className="flex items-center gap-3 py-5 sm:gap-5 sm:py-6">
              <div className="skeleton h-4 w-7" />
              <div className="skeleton hidden size-14 shrink-0 rounded-xl sm:block" />
              <div className="min-w-0 flex-1 space-y-2.5">
                <div className="skeleton h-2.5 w-16" />
                <div className="skeleton h-5 w-[65%] max-w-sm" />
                <div className="skeleton h-3 w-36" />
              </div>
              <div className="skeleton size-10 shrink-0 rounded-full" />
            </div>

            {index === 0 && (
              <div className="space-y-3 pb-8 pl-0 sm:pl-12">
                <div className="skeleton h-3 w-full" />
                <div className="skeleton h-3 w-[88%]" />
                <div className="grid gap-2.5 pt-2 sm:grid-cols-2">
                  {Array.from({ length: 4 }).map((__, i) => (
                    <div key={i} className="skeleton h-3 w-[72%]" />
                  ))}
                </div>
                <div className="skeleton mt-4 h-8 w-32 rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right sticky skeleton card */}
      <div className="hidden lg:block" aria-hidden="true">
        <div className="skeleton aspect-[4/5] w-full rounded-[22px]" />
      </div>
    </div>
  )
}
