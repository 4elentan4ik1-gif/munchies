import { Filter, PriceRange, RestaurantsResponse } from './types'

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE as string

// Универсальная помощь для query
export function buildQuery(params: Record<string, string | string[] | undefined>): string {
  const sp = new URLSearchParams()
  Object.entries(params).forEach(([k, v]) => {
    if (!v) return
    if (Array.isArray(v)) v.forEach(val => sp.append(k, val))
    else sp.set(k, v)
  })
  const qs = sp.toString()
  return qs ? `?${qs}` : ''
}

// Фильтры (список чипов)
export async function fetchFilters(): Promise<Filter[]> {
  const res = await fetch(`${API_BASE}/filter`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to load filters')
  return res.json()
}

// Ценовые диапазоны (если нужны)
export async function fetchPriceRanges(): Promise<PriceRange[]> {
  const res = await fetch(`${API_BASE}/price-ranges`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to load priceRanges')
  return res.json()
}

// Рестораны
// Если API поддерживает фильтрацию, добавим параметры, которые он понимает:
// допустим, ?filterIds=<id>&filterIds=<id>&priceRangeId=<id>
export async function fetchRestaurantsRaw(params: {
  filterIds?: string[];
  priceRangeId?: string;
}) {
  const res = await fetch(
    `${API_BASE}/restaurants${buildQuery({
      filterIds: params.filterIds,
      priceRangeId: params.priceRangeId,
    })}`,
    { cache: 'no-store' }
  )
  if (!res.ok) throw new Error('Failed to load restaurants')
  const json: RestaurantsResponse = await res.json()
  return json.restaurants
}
