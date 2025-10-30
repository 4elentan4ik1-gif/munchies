export default function Loading() {
  return (
    <main className="container space-y-8 py-8">
      <div className="animate-pulse h-8 w-40 rounded-lg bg-white/10" />

      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Сайдбар (десктоп) */}
        <aside className="hidden lg:block">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 space-y-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-8 w-full rounded-full bg-white/10" />
            ))}
          </div>
        </aside>

        {/* Мобильные фильтры */}
        <aside className="lg:hidden">
          <div className="flex gap-2 overflow-x-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 w-20 rounded-full bg-white/10 animate-pulse" />
            ))}
          </div>
        </aside>

        {/* Карточки ресторанов */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 animate-pulse"
            >
              <div className="h-40 w-full bg-white/10" />
              <div className="space-y-3 p-4">
                <div className="h-4 w-2/3 rounded bg-white/10" />
                <div className="h-4 w-1/3 rounded bg-white/10" />
                <div className="h-4 w-1/2 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
                