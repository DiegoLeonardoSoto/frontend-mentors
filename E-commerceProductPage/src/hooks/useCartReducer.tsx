import { useReducer } from 'react'
import {
  cartReducer,
  initialState,
  CART_ACTION_TYPE,
  TProductInCart
} from '../reducers/cartReducer'

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: TProductInCart) =>
    dispatch({ type: CART_ACTION_TYPE.ADD_TO_CART, payload: product })

  const removeToCart = (product: TProductInCart) =>
    dispatch({ type: CART_ACTION_TYPE.REMOVE_TO_CART, payload: product })

  return { state, addToCart, removeToCart }
}
