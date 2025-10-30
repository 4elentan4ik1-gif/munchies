'use client'

import { X } from 'lucide-react'
import clsx from 'clsx'

type Props = {
  label: string
  active?: boolean
  onClick?: () => void
  onClear?: () => void
}

export default function FilterChip({ label, active, onClick, onClear }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm',
        'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
        active
          ? 'bg-white text-black shadow-sm shadow-black/10'
          : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/15'
      )}
    >
      <span>{label}</span>
      {active && (
        <X
          className="h-4 w-4 opacity-80 transition-opacity duration-150 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation()
            onClear?.()
          }}
        />
      )}
    </button>
  )
}
