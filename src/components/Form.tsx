import { useNavigate } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(() => {
    navigate('/success')
  })

  return (
    <form noValidate onSubmit={onSubmit} className="mt-5 flex flex-col">
      <div className="flex justify-between font-bold text-xs mb-2">
        <p>Email address</p>
        {errors.email && (
          <span className="text-red-600">
            {errors.email.message?.toString()}
          </span>
        )}
      </div>

      <input
        {...register('email', {
          required: {
            value: true,
            message: 'email required'
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Valid email required'
          }
        })}
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        className={
          errors.email
            ? 'border-tomato text-tomato bg-tomato placeholder:text-tomato bg-opacity-20 rounded-lg border-solid border p-4 mb-5 '
            : 'border-gray-300 rounded-lg b border-solid border p-4 mb-5 '
        }
      />
      <PrimaryButton text="Subscribe to monthly newsletter" />
    </form>
  )
}

export default Form
