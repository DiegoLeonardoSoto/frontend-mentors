// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import Attributions from './components/Attributions'
import CustomInput from './components/CustomInput'
import { schema } from './helper/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { animation } from './helper/animation'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const [day, setDay] = useState<number | string>('--')
  const [month, setMonth] = useState<number | string>('--')
  const [year, setYear] = useState<number | string>('--')

  const onSubmit = handleSubmit((data) => {
    const timeDiff =
      new Date().getTime() -
      new Date(data.year, data.month - 1, data.day).getTime()
    const ageDate = new Date(timeDiff)

    animation(ageDate.getUTCDate() - 1, setDay)
    animation(ageDate.getUTCMonth(), setMonth)
    animation(ageDate.getUTCFullYear() - 1970, setYear)
  })

  return (
    <div className="h-screen bg-offWhite grid sm:place-content-center font-poppins">
      <div className="bg-white mt-20 mx-4 px-6 pt-12 sm:p-14 flex flex-col max-w-4xl rounded-3xl rounded-br-[100px] sm:rounded-[2rem] sm:rounded-br-[15rem]">
        {/* Form */}

        <form
          autoComplete="off"
          onSubmit={onSubmit}
          className="grid grid-cols-3 gap-x-4 sm:grid-cols-4  sm:gap-x-8"
        >
          {/* days */}
          <div className="flex flex-col gap-y-2 sm:gap-y-3">
            <CustomInput
              name="DAY"
              register={{ ...register('day') }}
              errorMessage={errors.day?.message}
            />
          </div>

          {/* month */}
          <div className="flex flex-col gap-y-2 sm:gap-y-3">
            <CustomInput
              name="MONTH"
              register={{ ...register('month') }}
              errorMessage={errors.month?.message}
            />
          </div>

          {/* year */}
          <div className="flex flex-col gap-y-2 sm:gap-y-3">
            <CustomInput
              name="YEAR"
              register={{ ...register('year') }}
              errorMessage={errors.year?.message}
            />
          </div>

          {/* Submit */}
          <div className="col-span-3 sm:col-span-4 flex items-center relative h-16 my-8 sm:h-auto">
            <hr className="w-full" />

            <input
              type="submit"
              className="sm:relative absolute left-0 right-0 mx-auto bg-offBlack rounded-full p-8 bg-[url('./images/icon-arrow.svg')] w-16 h-16  sm:w-24 sm:h-24 bg-no-repeat bg-center bg-[length:1.5rem_1.5rem] sm:bg-auto hover:bg-purple "
              value=" "
            />
          </div>
        </form>

        {/* Display */}
        <div className="text-5xl sm:text-displaySize text-offBlack italic font-extrabold">
          <p className="">
            <span className="text-purple">{year}</span> years
          </p>
          <p className="">
            <span className="text-purple">{month}</span> months
          </p>
          <p>
            <span className="text-purple">{day}</span> days
          </p>
        </div>
      </div>

      <Attributions />
    </div>
  )
}

export default App
