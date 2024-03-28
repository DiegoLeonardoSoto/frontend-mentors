export type TProductInCart = {
  id: number
  title: string
  price: string
  quantity: number
  totalPrice: string
  img: string
}

export type TCartState = TProductInCart[] | []

export const CART_ACTION_TYPE = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_TO_CART: 'REMOVE_TO_CART'
}

type TAction =
  | { type: typeof CART_ACTION_TYPE.ADD_TO_CART; payload: TProductInCart }
  | { type: typeof CART_ACTION_TYPE.REMOVE_TO_CART; payload: TProductInCart }

export const initialState = []

export const cartReducer = (state: TCartState, action: TAction) => {
  switch (action.type) {
    case CART_ACTION_TYPE.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === action.payload.id
      )

      if (productInCartIndex >= 0) {
        const newState: TCartState = structuredClone(state)
        newState[productInCartIndex].quantity = action.payload.quantity
        return newState
      }

      const newState = [
        ...state,
        {
          ...action.payload
        }
      ]

      return newState
    }

    case CART_ACTION_TYPE.REMOVE_TO_CART: {
      const newState = state.filter((item) => {
        item.id !== action.payload.id
      })
      return newState
    }
  }
  return state
}
