import { useState } from 'react'
import { LightboxContext } from './lightboxContext'

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [showLightbox, setShowLightbox] = useState(false)

  return (
    <LightboxContext.Provider value={{ showLightbox, setShowLightbox }}>
      {children}
    </LightboxContext.Provider>
  )
}
