import { createContext } from 'react'

export type ContextType = {
  cardHolderName: string
  handleCardHolderName: (value: string) => void

  cardNumber: string
  handleCardNumber: (value: string) => void

  month: number | undefined
  handleMonth: (value: string) => void

  year: number | undefined
  handleYear: (value: string) => void

  cvc: number | undefined
  handleCVc: (value: string) => void
}

export const Context = createContext<ContextType>({} as ContextType)
