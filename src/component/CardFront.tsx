import { useContext } from 'react'
import { Context } from '../Context/Context'

const CardFront = () => {
  const { cardNumber, cardHolderName, month, year } = useContext(Context)
  const placeHolderCardNumber = '0000 0000 0000 0000'
  const placeHolderMonthYear = '00'

  return (
    <div className=" z-10 absolute left-4 sm:left-56 top-32 sm:top-[188px]">
      <div className="relative w-72 sm:w-max">
        <img src="./assets/images/bg-card-front.png" alt="" />
        <div>
          <img
            className="absolute top-5 left-5 w-14 sm:w-20"
            src="./assets/images/card-logo.svg"
            alt=""
          />

          <div className="absolute bottom-5 left-5 right-5 text-white flex flex-col gap-4 sm:gap-8 tracking-wider">
            <h1 className="text-lg sm:text-[2rem] tracking-[0.13rem] font-medium">
              {cardNumber + placeHolderCardNumber.slice(cardNumber.length)}
            </h1>

            <div className="flex justify-between text-[9px] sm:text-base">
              <span className="uppercase">
                {cardHolderName.length > 0 ? cardHolderName : 'Jane Appleseed'}
              </span>
              <span>
                <span>
                  {month?.toString() === 'NaN'
                    ? placeHolderMonthYear
                    : month +
                      placeHolderMonthYear.slice(month?.toString().length)}
                  /
                  {year?.toString() === 'NaN'
                    ? placeHolderMonthYear
                    : year +
                      placeHolderMonthYear.slice(year?.toString().length)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFront
