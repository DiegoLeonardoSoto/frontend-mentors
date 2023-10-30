import { useContext } from 'react'
import { Context } from '../Context/Context'

const CardBack = () => {
  const { cvc } = useContext(Context)
  const placeHolder = '000'

  return (
    <div className="absolute right-4 top-8 sm:left-80 sm:top-[468px]">
      <div className="relative w-72 sm:w-max">
        <img src="./assets/images/bg-card-back.png" alt="" />
        <span className="absolute right-9 sm:right-12 bottom-[4.5rem] sm:bottom-28 sm: text-[9px] sm:text-base text-white">
          {cvc?.toString() === 'NaN'
            ? placeHolder
            : cvc?.toString() + placeHolder.slice(cvc?.toString().length)}
        </span>
      </div>
    </div>
  )
}

export default CardBack
