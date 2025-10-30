import FiltersPanel from '@/components/FiltersPanel'
import ActiveFiltersBar from '@/components/ActiveFiltersBar'
import RestaurantsGrid from '@/components/RestaurantsGrid'
import EmptyState from '@/components/EmptyState'
import { loadFiltersAndRestaurants } from '@/lib/data'

export const dynamic = 'force-dynamic'
type SP = Record<string, string | string[] | undefined>

export default async function Page({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams
  const query = {
    filterIds: Array.isArray(sp.filterIds)
      ? (sp.filterIds as string[])
      : sp.filterIds ? [String(sp.filterIds)] : undefined,
  }

  const { filters, restaurants } = await loadFiltersAndRestaurants(query)

  return (
    <main className="container space-y-10 py-10">
      {/* Топбар */}
      <header className="flex items-center justify-between">
        <h1 className="text-[36px] font-extrabold tracking-tight leading-none">Munchies</h1>
      </header>

      {/* Лейаут */}
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Сайдбар фильтров */}
        <aside className="lg:sticky lg:top-6 lg:h-fit">
          {/* Мобайл: горизонтальные чипы */}
          <div className="lg:hidden -mx-6 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2 px-6">
              <FiltersPanel filters={filters} />
            </div>
          </div>

          {/* Десктоп: карточка фильтров */}
          <div className="hidden lg:block">
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <FiltersPanel filters={filters} />
            </div>
          </div>
        </aside>

        {/* Контент */}
        <section className="space-y-4">
          <ActiveFiltersBar filters={filters} />
          {restaurants.length > 0 ? (
            <RestaurantsGrid restaurants={restaurants} />
          ) : (
            <EmptyState />
          )}
        </section>
      </div>
    </main>
  )
}
