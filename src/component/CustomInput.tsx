import { ChangeEvent } from 'react'
import { RefCallBack, UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  type: 'text' | 'number' | 'email' | 'password'
  name?: string
  value: string | number | undefined
  placeHolder: string
  errorMessage?: string | undefined
  showMessage?: boolean
  disabled?: boolean

  innerRef?: RefCallBack
  register?: UseFormRegisterReturn<string>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({
  type,
  name,
  value,
  placeHolder,
  errorMessage,
  showMessage = true,
  disabled = false,
  innerRef,
  register,
  onChange
}: Props) => {
  return (
    <div>
      <label className="block text-smokeGrey font-bold tracking-[.125rem] mb-3 uppercase text-xs ">
        {showMessage ? name : ''}
      </label>

      <input
        {...register}
        ref={innerRef}
        type={type}
        id={name}
        name={name}
        value={value === 0 ? '' : value}
        placeholder={placeHolder}
        disabled={disabled}
        className={
          errorMessage
            ? ' outline-none text-lg sm:text-xl placeholder:text-lightGrayishViolet  border border-red p-4 w-full rounded-xl focus:border-lightRed'
            : ' outline-none text-lg sm:text-xl placeholder:text-lightGrayishViolet  border border-lightGrayishViolet p-4 w-full rounded-xl focus:border-veryDarkViolet'
        }
        onChange={onChange}
      />

      {errorMessage && showMessage && (
        <p className="mt-3 sm:text-sm  text-xs  text-red">
          {errorMessage.toString()}
        </p>
      )}
    </div>
  )
}

export default CustomInput
