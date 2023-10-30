import { useState } from 'react'
import { Context } from './Context'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const Provider = ({ children }: Props) => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [cvc, setCvc] = useState(0)

  /**
   * The function `handleCardNumberDisplay` formats a card number by adding spaces every four characters.
   * @returns The function `handleCardNumberDisplay` returns a formatted card number string.
   */
  const handleCardNumber = (value: string) => {
    if (value.length > 19) {
      setCardNumber(value.substring(0, 19))
      value = cardNumber
    }

    const rawText = [...value.split(' ').join('')]
    const displayCardNumber: string[] = []

    rawText.forEach((t, i) => {
      if (i % 4 === 0 && i !== 0) displayCardNumber.push(' ') // Add space
      displayCardNumber.push(t)
    })
    setCardNumber(displayCardNumber.join(''))
  }

  const handleCardHolderName = (value: string) => {
    setCardHolderName(value)
  }

  const handleMonth = (value: string) => {
    if (value.length > 2) value = month.toString()
    setMonth(parseInt(value))
  }

  const handleYear = (value: string) => {
    if (value.length > 2) value = year.toString()

    setYear(parseInt(value))
  }

  const handleCVc = (value: string) => {
    if (value.length > 3) value = cvc.toString()

    setCvc(parseInt(value))
  }

  return (
    <Context.Provider
      value={{
        cardNumber,
        handleCardNumber,
        cardHolderName,
        handleCardHolderName,
        month,
        handleMonth,
        year,
        handleYear,
        cvc,
        handleCVc
      }}
    >
      {children}
    </Context.Provider>
  )
}
