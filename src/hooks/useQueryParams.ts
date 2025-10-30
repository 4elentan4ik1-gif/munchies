'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useQueryParams() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function setParam(key: string, value?: string | string[]) {
    const sp = new URLSearchParams(searchParams.toString())
    if (!value || (Array.isArray(value) && value.length === 0)) {
      sp.delete(key)
    } else if (Array.isArray(value)) {
      sp.delete(key); value.forEach(v => sp.append(key, v))
    } else {
      sp.set(key, value)
    }
    router.replace(`${pathname}?${sp.toString()}`)
  }

  function toggleInMulti(key: string, value: string) {
    const sp = new URLSearchParams(searchParams.toString())
    const values = sp.getAll(key)
    if (values.includes(value)) {
      const next = values.filter(v => v !== value)
      sp.delete(key); next.forEach(v => sp.append(key, v))
    } else {
      sp.append(key, value)
    }
    router.replace(`${pathname}?${sp.toString()}`)
  }

  return { searchParams, setParam, toggleInMulti }
}
