import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SuccessMessage = () => {
  const navigate = useNavigate()
  const { reset, watch } = useForm()

  const handleOnClick = () => {
    reset()
    navigate('/')
    console.log(JSON.stringify(watch()))
  }

  return (
    <div className="mt-24 mb-10 mx-6 grid text-center sm:my-auto sm:mx-auto sm:w-96">
      <img className="mx-auto" src="./assets/images/icon-complete.svg" alt="" />
      <h1 className="uppercase tracking-widest text-3xl mt-10">Thank you!</h1>
      <h2 className="mt-7 text-darkGrayishViolet">
        We've added your card details
      </h2>
      <button
        onClick={handleOnClick}
        className="bg-veryDarkViolet mt-12 rounded-xl text-xl p-5 text-white bg-gradient-to-r hover:from-[#6448fe] hover:to-[#600594]"
      >
        Continue
      </button>
    </div>
  )
}

export default SuccessMessage
