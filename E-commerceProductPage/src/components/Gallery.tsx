import { useState } from 'react'

type TImage = {
  img: string
  thumbnail: string
}

type TProps = {
  images: TImage[]
}

export const Gallery = ({ images }: TProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (id: number): void => {
    setCurrentIndex(id)
  }

  return (
    <div className="relative w-2/5 grid gap-8">
      <div
        style={{ backgroundImage: `url(${images[currentIndex].img})` }}
        className=" relative h-56 md:h-96 overflow-hidden rounded-2xl bg-current bg-cover bg-center duration-500 bg-no-repeat"
      >
        <button className="h-10 w-10 block absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 rounded-full  bg-white cursor-pointer">
          <img className="mx-auto" src="../images/icon-previous.svg" alt="" />
        </button>

        <button className="h-10 w-10 block absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 rounded-full  bg-white cursor-pointer">
          <img className="mx-auto" src="../images/icon-next.svg" alt="" />
        </button>
      </div>

      <ul className=" md:grid grid-cols-4 gap-8 rtl:space-x-reverse md:">
        {images.map(({ thumbnail }, thumbnailIndex) => (
          <li
            onClick={() => goToSlide(thumbnailIndex)}
            key={crypto.randomUUID()}
            className={`${
              thumbnailIndex === currentIndex
                ? 'border-primaryOrange border-2 '
                : ''
            } rounded-2xl min-w-20 min-h-20`}
          >
            <input
              type="radio"
              className="text-2xl hidden peer"
              name="thumbnail"
              id={`thumbnail-${thumbnailIndex}`}
              value={`thumbnail-${thumbnailIndex}`}
            />
            <label
              htmlFor={`thumbnail-${thumbnailIndex}`}
              style={{ backgroundImage: `url(${thumbnail})` }}
              className={`${
                thumbnailIndex === currentIndex ? 'opacity-50' : 'opacity-100'
              } w-full h-full bg-cover rounded-lg cursor-pointer hover:opacity-50 peer-checked:opacity-50 block`}
            ></label>
          </li>
        ))}
      </ul>
    </div>
  )
}
