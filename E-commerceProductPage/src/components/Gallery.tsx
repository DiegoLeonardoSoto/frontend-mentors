import { useContext } from 'react'
import { images } from '../mock/product.json'
import {
  LightboxContext,
  TLigthboxContextProp
} from '../context/lightboxContext/lightboxContext'
import { useGallery } from '../hooks/useGallery'

type Props = {
  isLightbox?: boolean
}

export const Gallery = ({ isLightbox = false }: Props) => {
  const { currentIndex, goToSlide, nextSlide, prevSlide } = useGallery()
  const { setShowLightbox } = useContext(
    LightboxContext
  ) as TLigthboxContextProp

  return (
    <section className="flex flex-col">
      <div className="relative">
        <button
          className={
            isLightbox
              ? `bg-white w-12 h-12 flex items-center justify-center rounded-full text-center z-10 absolute top-1/2 -left-6 -mt-6`
              : ' md:hidden '
          }
          onClick={prevSlide}
        >
          <img src="../images/icon-previous.svg" alt="" />
        </button>
        <button
          className={
            isLightbox
              ? `bg-white w-12 h-12 flex items-center justify-center rounded-full text-center z-10 absolute top-1/2 -right-6 -mt-6`
              : 'md:hidden'
          }
          onClick={nextSlide}
        >
          <img src="../images/icon-next.svg" alt="" />
        </button>

        <button onClick={() => setShowLightbox(true)}>
          <img
            src={images[currentIndex].img}
            className={`rounded-xl duration-500 cursor-pointer ${
              isLightbox ? 'max-w-lg' : 'max-w-md'
            }`}
            alt=""
          />
        </button>
      </div>

      <div>
        <ul
          className={`md:flex gap-4 ${
            isLightbox ? 'justify-center' : 'justify-between'
          } rtl:space-x-reverse mt-8`}
        >
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
