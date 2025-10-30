export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
        <span className="text-xl">🍽️</span>
      </div>
      По выбранным фильтрам ничего не нашлось. Попробуй изменить настройки.
    </div>
  )
}
