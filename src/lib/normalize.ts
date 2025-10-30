import { Restaurant, RestaurantDTO } from './types'

export function normalizeRestaurant(r: RestaurantDTO): Restaurant {
  return {
    id: r.id,
    name: r.name,
    rating: r.rating,
    filterIds: Array.isArray(r.filterIds) ? r.filterIds : [],
    imageUrl: r.image_url,
    deliveryTime: r.delivery_time_minutes,
  }
}
