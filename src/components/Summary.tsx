import PrimaryButton from './PrimaryButton'
import CategoriesContainer from './CategoriesContainer'

const SummaryComponent = () => {
  return (
    <div className="flex flex-col basis-1/2 p-6 gap-y-4 sm:gap-y-3.5 justify-evenly ">
      <p className="font-bold text-lg sm:text-bas">Summary</p>
      <CategoriesContainer />
      <PrimaryButton />
    </div>
  )
}

export default SummaryComponent
