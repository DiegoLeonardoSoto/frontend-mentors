import PrimaryButton from '../components/PrimaryButton'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SuccessPage = () => {
  const { handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(() => {
    navigate('/')
  })

  return (
    <form
      autoComplete="off"
      onSubmit={onSubmit}
      className="flex flex-col bg-white  h-screen  sm:h-auto sm:p-16 sm:max-w-lg sm:gap-y-8 sm:rounded-3xl font-roboto justify-around px-8"
    >
      <div className="flex flex-col gap-y-8 sm:gap-y-7">
        <img className="w-fit" src="./assets/images/icon-success.svg" />
        <h1 className="text-4xl sm:text-6xl font-bold text-darkSlateGrey">
          Thanks for subscribing!
        </h1>
        <p className="text-darkSlateGrey">
          A confirmation email has been sent to
          <span className="font-bold"> ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>

      <PrimaryButton text="Dismiss message" />
    </form>
  )
}

export default SuccessPage
