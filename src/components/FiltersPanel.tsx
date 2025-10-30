'use client'
import FilterChip from './FilterChip'
import { useQueryParams } from '@/hooks/useQueryParams'
import type { Filter } from '@/lib/types'

export default function FiltersPanel({ filters = [] }: { filters?: Filter[] }) {
  const { searchParams, toggleInMulti } = useQueryParams()
  const activeFilterIds = searchParams.getAll('filterIds')

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <FilterChip
          key={f.id}
          label={f.name}
          active={activeFilterIds.includes(f.id)}
          onClick={() => toggleInMulti('filterIds', f.id)}
          onClear={() => toggleInMulti('filterIds', f.id)}
        />
      ))}
    </div>
  )
}
