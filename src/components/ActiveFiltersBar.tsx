'use client'
import { useQueryParams } from '@/hooks/useQueryParams'
import FilterChip from './FilterChip'
import type { Filter } from '@/lib/types'

export default function ActiveFiltersBar({ filters = [] }: { filters?: Filter[] }) {
  const { searchParams, toggleInMulti } = useQueryParams()
  const activeFilterIds = searchParams.getAll('filterIds')
  const activeFilters = filters.filter(f => activeFilterIds.includes(f.id))

  if (activeFilters.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2">
      {activeFilters.map(f => (
        <FilterChip key={f.id} label={f.name} active onClear={() => toggleInMulti('filterIds', f.id)} />
      ))}
      <button
        onClick={() => {
          const sp = new URLSearchParams()
          window.history.replaceState(null, '', `${location.pathname}?${sp.toString()}`)
          location.reload()
        }}
        className="focus-ring ml-2 text-sm text-white/80 underline"
      >
        Сбросить все
      </button>
    </div>
  )
}
