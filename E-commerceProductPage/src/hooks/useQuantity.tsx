import { useState } from 'react'

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(0)

  const increseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreseQuantity = () => {
    setQuantity((prev) => {
      if (prev > 0) return prev - 1
      return 0
    })
  }

  return {
    quantity,
    increseQuantity,
    decreseQuantity
  }
}
