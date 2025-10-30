// Модели из твоего API
export interface Filter {
  id: string;            // uuid
  name: string;
  image_url: string;     // uri
}

export interface RestaurantDTO {
  id: string;
  name: string;
  rating: number;                 // 0..5
  filterIds: string[];            // список id фильтров
  image_url: string;              // uri
  delivery_time_minutes: number;  // integer
}

export interface RestaurantsResponse {
  restaurants: RestaurantDTO[];
}

export interface OpenStatus {
  restaurant_id: string;
  is_currently_open: boolean;
}

export interface PriceRange {
  id: string;     // uuid
  range: string;  // например "$$"
}

// Нормализованная модель для UI
export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filterIds: string[];
  imageUrl: string;
  deliveryTime: number;
}
