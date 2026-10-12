import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { EnquireModal } from '../components/EnquireModal'

type EnquireContextValue = {
  openEnquire: () => void
}

const EnquireContext = createContext<EnquireContextValue | null>(null)

export function EnquireProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openEnquire = useCallback(() => setOpen(true), [])

  const value = useMemo(() => ({ openEnquire }), [openEnquire])

  return (
    <EnquireContext.Provider value={value}>
      {children}
      <EnquireModal open={open} onClose={() => setOpen(false)} />
    </EnquireContext.Provider>
  )
}

export function useEnquire() {
  const ctx = useContext(EnquireContext)
  if (!ctx) throw new Error('useEnquire must be used within EnquireProvider')
  return ctx
}
