import Score from './Score'

const ResultComponent = () => {
  return (
    <div className="gap-y-4 sm:gap-0 flex flex-col sm:basis-1/2 p-6 justify-between bg-gradient-to-b from-[var(--clr-primary-400)] to-[var(--clr-secondary-400)] text-[var(--clr-neutral-100)] text-center rounded-b-3xl sm:rounded-2xl">
      <h1 className="font-medium opacity-60 text-lg sm:text-base">
        Your Result
      </h1>
      <Score />
      <h2 className="font-[var(--fw-bold)] text-2xl">Great</h2>
      <p className="sm:w-10/12 sm:mx-auto opacity-50 text-lg sm:text-sm ">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  )
}

export default ResultComponent
