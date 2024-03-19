import { useContext, useState } from 'react'
import { images } from '../mock/product.json'
import {
  LightboxContext,
  LigthboxContextProp
} from '../context/lightboxContext'

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { setShowLightbox } = useContext(LightboxContext) as LigthboxContextProp

  const goToSlide = (id: number): void => {
    setCurrentIndex(id)
  }

  return (
    <section className="flex flex-col">
      {/* 

      <div
        style={{ backgroundImage: `url(${images[currentIndex].img})` }}
        className=" relative h-56 w- md:h-96 overflow-hidden rounded-xl bg-current bg-cover bg-center duration-500 bg-no-repeat cursor-pointer"
      >
        <button className="hidden h-10 w-10 absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 rounded-full  bg-white cursor-pointer">
          <img className="mx-auto" src="../images/icon-previous.svg" alt="" />
        </button>

        <button className="hidden h-10 w-10 absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 rounded-full  bg-white cursor-pointer">
          <img className="mx-auto" src="../images/icon-next.svg" alt="" />
        </button>
      </div>
*/}
      <button onClick={() => setShowLightbox(true)}>
        <img
          src={images[currentIndex].img}
          className="rounded-xl duration-500 cursor-pointer max-w-md"
          alt=""
        />
      </button>

      <div>
        <ul className=" md:flex gap-4 justify-between rtl:space-x-reverse mt-8">
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
                } w-[90px] h-[90px] bg-cover rounded-lg cursor-pointer hover:opacity-50 peer-checked:opacity-50 block`}
              ></label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
