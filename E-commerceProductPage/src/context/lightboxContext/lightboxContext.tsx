import { createContext } from 'react'

export type TLigthboxContextProp = {
  showLightbox: boolean
  setShowLightbox: React.Dispatch<React.SetStateAction<boolean>>
}

export const LightboxContext = createContext<TLigthboxContextProp>(
  {} as TLigthboxContextProp
)
