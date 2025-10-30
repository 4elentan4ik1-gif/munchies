import type { Filter, RestaurantDTO, RestaurantsResponse, PriceRange } from './types'

export const MOCK_FILTERS: Filter[] = [
  { id: 'f-italian', name: 'Italian', image_url: '' },
  { id: 'f-asian',   name: 'Asian',   image_url: '' },
  { id: 'f-mex',     name: 'Mexican', image_url: '' },
  { id: 'f-indian',  name: 'Indian',  image_url: '' },
  { id: 'f-french',  name: 'French',  image_url: '' },
  { id: 'f-amer',    name: 'American',image_url: '' },
]

export const MOCK_PRICE_RANGES: PriceRange[] = [
  { id: 'p-$',   range: '$'   },
  { id: 'p-$$',  range: '$$'  },
  { id: 'p-$$$', range: '$$$' },
]

const R: RestaurantDTO[] = [
  { id: '1', name: 'Trattoria Oslo',   rating: 4.6, filterIds: ['f-italian'],  image_url: '', delivery_time_minutes: 25 },
  { id: '2', name: 'Nordic Sushi Bar', rating: 4.4, filterIds: ['f-asian'],    image_url: '', delivery_time_minutes: 30 },
  { id: '3', name: 'La Taquería',      rating: 4.2, filterIds: ['f-mex'],      image_url: '', delivery_time_minutes: 20 },
  { id: '4', name: 'Spice Route',      rating: 4.7, filterIds: ['f-indian'],   image_url: '', delivery_time_minutes: 35 },
  { id: '5', name: 'Bistro Marais',    rating: 4.5, filterIds: ['f-french'],   image_url: '', delivery_time_minutes: 40 },
  { id: '6', name: 'Downtown Diner',   rating: 4.1, filterIds: ['f-amer'],     image_url: '', delivery_time_minutes: 18 },
]

export const MOCK_RESTAURANTS_RESPONSE: RestaurantsResponse = { restaurants: R }
