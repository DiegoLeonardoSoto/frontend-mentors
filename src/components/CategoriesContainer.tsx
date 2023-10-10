import scores from '../data.json'
import { category } from '../types/data'
import Category from './Category'

const CategoriesContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      {scores.map((category: category, index: number) => {
        return <Category key={index} category={category} />
      })}
    </div>
  )
}

export default CategoriesContainer
