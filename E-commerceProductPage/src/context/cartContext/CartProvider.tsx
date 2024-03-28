import { cartContext } from './cartContext'
import { useCartReducer } from '../../hooks/useCartReducer'

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { state, addToCart, removeToCart } = useCartReducer()

  return (
    <cartContext.Provider value={{ cart: state, addToCart, removeToCart }}>
      {children}
    </cartContext.Provider>
  )
}
