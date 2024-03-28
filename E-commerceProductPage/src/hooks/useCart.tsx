import { useContext } from 'react'
import { cartContext } from '../context/cartContext/cartContext'

export const useCart = () => {
  const context = useContext(cartContext)

  if (context === undefined) {
    throw new Error('useCart no se puede usar sin el CartProvider')
  }

  return { ...context }
}
