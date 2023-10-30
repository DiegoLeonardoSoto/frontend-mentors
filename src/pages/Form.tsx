import CustomInput from '../component/CustomInput'
import { formData } from '../types/formData'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../helper/schema'
import ErrorComponent from '../component/ErrorComponent'
import { useContext } from 'react'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<formData>({
    resolver: yupResolver(schema)
  })

  const {
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
  } = useContext(Context)

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    navigate('success')
  })

  return (
    <form
      onSubmit={onSubmit}
      className="mt-24 mb-10 mx-6 flex flex-col gap-y-6 sm:my-auto sm:w-96 sm:mx-auto"
    >
      {/* Card holder name */}
      <Controller
        name="cardHolderName"
        control={control}
        render={({ field: { onChange, ref, ...field } }) => (
          <CustomInput
            {...field}
            innerRef={ref}
            type="text"
            name="Cardholder Name"
            value={cardHolderName}
            placeHolder="e.g. Jane Appleseed"
            errorMessage={errors.cardHolderName?.message}
            onChange={({ target: { value } }) => {
              onChange(value)
              handleCardHolderName(value)
            }}
          />
        )}
      />

      {/* Card number */}

      <Controller
        name="cardNumber"
        control={control}
        render={({ field: { onChange, ref, ...field } }) => (
          <CustomInput
            {...field}
            innerRef={ref}
            type="text"
            name="Card Number"
            value={cardNumber}
            placeHolder="e.g. 1234 5678 9123 0000"
            errorMessage={errors.cardNumber?.message}
            onChange={({ target: { value } }) => {
              value.length <= 19 && onChange(value)
              handleCardNumber(value)
            }}
          />
        )}
      />

      {/* Expiration Day and Cvc */}
      <div className="flex gap-3">
        <div className="flex flex-col w-4/5">
          <p className="text-smokeGrey font-bold tracking-[.125rem] text-xs">
            EXP. DATE (MM/YY)
          </p>
          <div className="flex gap-2 ">
            <Controller
              name="expDate.month"
              control={control}
              render={({ field: { onChange, ref, ...field } }) => (
                <CustomInput
                  {...field}
                  innerRef={ref}
                  type="number"
                  placeHolder="MM"
                  errorMessage={errors.expDate?.month?.message}
                  value={month}
                  onChange={({ target: { value } }) => {
                    onChange(value)
                    handleMonth(value)
                  }}
                  showMessage={false}
                />
              )}
            />

            <Controller
              name="expDate.year"
              control={control}
              render={({ field: { onChange, ref, ...field } }) => (
                <CustomInput
                  {...field}
                  innerRef={ref}
                  type="number"
                  placeHolder="YY"
                  errorMessage={errors.expDate?.year?.message}
                  value={year}
                  onChange={({ target: { value } }) => {
                    onChange(value)
                    handleYear(value)
                  }}
                  showMessage={false}
                />
              )}
            />
          </div>

          <ErrorComponent
            monthErrorMessage={errors.expDate?.month?.message}
            yearErrorMessage={errors.expDate?.year?.message}
          />
        </div>

        <Controller
          name="cvc"
          control={control}
          render={({ field: { onChange, ref, ...field } }) => (
            <CustomInput
              {...field}
              innerRef={ref}
              type="number"
              name="CVC"
              placeHolder="e.g . 123"
              errorMessage={errors.cvc?.message}
              value={cvc}
              onChange={({ target: { value } }) => {
                value.length <= 3 && onChange(value)
                handleCVc(value)
              }}
            />
          )}
        />
      </div>

      <input
        type="submit"
        value="Confirm"
        className="bg-veryDarkViolet rounded-xl text-lg p-5 text-white bg-gradient-to-r hover:from-[#6448fe] hover:to-[#600594]"
      />
    </form>
  )
}

export default Form
