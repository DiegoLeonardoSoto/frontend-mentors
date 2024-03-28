import { createContext } from 'react'
import { TCartState, TProductInCart } from '../../reducers/cartReducer'

export type TCartContextProp = {
  cart: TCartState
  addToCart: (product: TProductInCart) => void
  removeToCart: (product: TProductInCart) => void
}

export const cartContext = createContext<TCartContextProp>(
  {} as TCartContextProp
)
