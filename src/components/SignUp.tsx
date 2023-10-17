import Form from './Form'
import List from './List'

const SignUp = () => {
  return (
    <div className="pt-8 px-5 mb-8 sm:p-0  flex flex-col sm:mt-4 sm:w-96 sm:justify-center sm:mx-12 gap-4 text-charcoalGrey">
      <h1 className="text-4xl sm:text-6xl first-letter font-bold text-darkSlateGrey">
        Stay updated!
      </h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <List />
      <Form />
    </div>
  )
}

export default SignUp
