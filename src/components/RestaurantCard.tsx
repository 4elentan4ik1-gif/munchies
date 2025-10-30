import { Restaurant } from '@/lib/types'

export default function RestaurantCard({ r }: { r: Restaurant }) {
  const img =
    r.imageUrl && r.imageUrl.trim() !== ''
      ? r.imageUrl
      : `https://picsum.photos/seed/${encodeURIComponent(r.id)}/800/400`

  return (
    <article
      className="group flex flex-col h-[350px] overflow-hidden rounded-[20px] border border-white/10
                 bg-white/5 backdrop-blur-sm shadow-sm transition-transform duration-200
                 hover:-translate-y-[2px] hover:shadow-[0_6px_25px_-4px_rgba(255,255,255,.15)]
                 motion-safe:animate-fade-in"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={r.name}
        className="h-[180px] w-full object-cover transition-opacity duration-200 group-hover:opacity-95"
        loading="lazy"
      />

      <div className="p-5 space-y-1.5">
        <h3 className="text-lg font-semibold leading-tight">{r.name}</h3>
        <p className="text-sm text-white/70">
          Рейтинг: {typeof r.rating === 'number' ? r.rating.toFixed(1) : '—'} / 5
        </p>
        <p className="text-xs text-white/50">Доставка ≈ {r.deliveryTime ?? '—'} мин</p>
      </div>
    </article>
  )
}
