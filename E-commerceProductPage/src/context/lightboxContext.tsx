import { createContext } from 'react'

export type LigthboxContextProp = {
  showLightbox: boolean
  setShowLightbox: React.Dispatch<React.SetStateAction<boolean>>
}

export const LightboxContext = createContext<LigthboxContextProp>(
  {} as LigthboxContextProp
)
