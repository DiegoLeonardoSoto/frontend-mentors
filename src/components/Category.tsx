import { useEffect, useRef } from 'react'
import { category } from '../types/data'

type props = {
  category: category
}

const Category = ({ category }: props) => {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current) {
      if (category.category === 'Reaction') {
        divRef.current.style.backgroundColor = 'hsl(var(--clr-accent-1), .1)'
        divRef.current.style.color = 'hsl(var(--clr-accent-1))'
      }

      if (category.category === 'Memory') {
        divRef.current.style.backgroundColor = 'hsl(var(--clr-accent-2), .1)'
        divRef.current.style.color = 'hsl(var(--clr-accent-2))'
      }

      if (category.category === 'Verbal') {
        divRef.current.style.backgroundColor = 'hsl(var(--clr-accent-3), .1)'
        divRef.current.style.color = 'hsl(var(--clr-accent-3))'
      }

      if (category.category === 'Visual') {
        divRef.current.style.backgroundColor = 'hsl(var(--clr-accent-4), .1)'
        divRef.current.style.color = 'hsl(var(--clr-accent-4))'
      }
    }
  })

  return (
    <div
      ref={divRef}
      className="flex justify-between rounded-md p-3 text-lg sm:text-sm"
    >
      <div className="flex align-middle gap-2">
        <img
          className=" sm:w-4 sm:h-4 sm:my-auto"
          src={category.icon}
          alt="Icon"
        />

        <h3 className="font-medium">{category.category}</h3>
      </div>
      <p className="text-[var(--clr-neutral-700)]">
        <span className="font-black"> {category.score} </span>{' '}
        <span className="opacity-50 font-extrabold"> / 100</span>
      </p>
    </div>
  )
}

export default Category
