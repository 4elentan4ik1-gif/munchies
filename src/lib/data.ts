import { fetchRestaurantsRaw } from './api'
import { normalizeRestaurant } from './normalize'
import { Restaurant, Filter } from './types'
import { MOCK_RESTAURANTS_RESPONSE } from './mock'

// карты ID фильтров в человекочитаемые названия
const FILTER_NAMES: Record<string, string> = {
  'f-italian': 'Italian',
  'f-asian': 'Asian',
  'f-mex': 'Mexican',
  'f-indian': 'Indian',
  'f-french': 'French',
  'f-amer': 'American',
}

export type Query = {
  filterIds?: string[]
}

function extractFilters(restaurants: Restaurant[]): Filter[] {
  const filterIdSet = new Set(restaurants.flatMap(r => r.filterIds))
  return [...filterIdSet].map(id => ({
    id,
    name: FILTER_NAMES[id] ?? id,
    image_url: '',
  }))
}

export async function loadFiltersAndRestaurants(q: Query): Promise<{
  filters: Filter[]
  restaurants: Restaurant[]
}> {
  let raw: any[] = []

  try {
    raw = await fetchRestaurantsRaw(q)
  } catch {
    raw = MOCK_RESTAURANTS_RESPONSE.restaurants
  }

  let restaurants = raw.map(normalizeRestaurant)

  if (q.filterIds && q.filterIds.length > 0) {
    const want = new Set(q.filterIds)
    restaurants = restaurants.filter(r =>
      r.filterIds.some(id => want.has(id))
    )
  }

  const filters = extractFilters(restaurants)

  return { filters, restaurants }
}
