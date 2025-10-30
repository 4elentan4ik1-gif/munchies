'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { Restaurant } from '@/lib/types'
import RestaurantCard from './RestaurantCard'

export default function RestaurantsGrid({ restaurants }: { restaurants: Restaurant[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence initial={false} mode="popLayout">
        {restaurants.map((r) => (
          <motion.div
            key={r.id}
            layout
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <RestaurantCard r={r} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
