import SignUp from './SignUp'

const SignUpContainer = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:rounded-3xl font-roboto bg-white ">
      <SignUp />
      <div className="sm:p-5">
        <img
          className="sm:hidden w-[-webkit-fill-available]"
          src="./assets/images/illustration-sign-up-mobile.svg"
          alt=""
        />

        <img
          className="hidden sm:block"
          src="./assets/images/illustration-sign-up-desktop.svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default SignUpContainer
