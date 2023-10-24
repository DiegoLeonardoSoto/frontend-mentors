export function animation(
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number | string>>
) {
  let i = 0
  const interval = setInterval(() => {
    setValue(i)
    ++i
    if (i >= value) {
      clearInterval(interval)
    }
  }, 70)
}

// const [number, setNumber] = useState(0)
// let InputValue = 0
// let interval: number

// const contAnimation = () => {
//   if (number !== InputValue) {
//     setNumber((prev) => {
//       if (prev < InputValue) {
//         return ++prev
//       }
//       clearInterval(interval)
//       return prev
//     })
//   }
// }

// const handleOnClick = () => {
//   setNumber(0)
//   interval = setInterval(contAnimation, 100)
// }
