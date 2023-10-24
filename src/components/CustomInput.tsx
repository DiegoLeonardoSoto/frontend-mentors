import { UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  name: 'DAY' | 'MONTH' | 'YEAR'
  register: UseFormRegisterReturn<string>
  errorMessage: string | undefined
}

const placeHolderText = {
  DAY: 'DD',
  MONTH: 'MM',
  YEAR: 'YYYY'
}

const CustomInput = ({ name, register, errorMessage }: Props) => {
  return (
    <>
      <label
        className={
          errorMessage
            ? 'text-lightRed font-bold tracking-[.3em] text-xs sm:text-base'
            : 'text-smokeGrey font-bold tracking-[.3em] text-xs sm:text-base'
        }
      >
        {name}
      </label>
      <input
        {...register}
        className={
          errorMessage
            ? 'outline-none text-lg sm:text-inputSize font-bold placeholder:text-smokeGrey placeholder:font-bold border border-lightRed p-4 sm:p-6 w-full rounded-xl focus:border-lightRed'
            : 'outline-none text-lg sm:text-inputSize font-bold placeholder:text-smokeGrey placeholder:font-bold border border-lightGrey p-4 sm:p-6 w-full rounded-xl focus:border-purple'
        }
        type="text"
        placeholder={placeHolderText[name]}
      />
      {errorMessage && (
        <p className="italic sm:text-sm text-xs  text-lightRed">
          {errorMessage.toString()}
        </p>
      )}
    </>
  )
}

export default CustomInput
