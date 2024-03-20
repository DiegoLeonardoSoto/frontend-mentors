import { useContext } from 'react'
import { Gallery } from './Gallery'
import {
  LightboxContext,
  LigthboxContextProp
} from '../context/lightboxContext'

export const Lightbox = () => {
  const { showLightbox, setShowLightbox } = useContext(
    LightboxContext
  ) as LigthboxContextProp

  return (
    <div
      className={`${
        showLightbox ? 'flex' : 'hidden'
      } absolute top-0 bottom-0 left-0 right-0 bg-black/75  items-center flex-col justify-center`}
    >
      <div className="relative">
        <button
          onClick={() => setShowLightbox(false)}
          className="closebutton absolute -top-10 right-2 bg-transparent cursor-pointer text-primaryOrange"
        >
          <img className="w-5 h-5 " src="../images/icon-close.svg" alt="" />
        </button>
        <Gallery isLightbox={true} />
      </div>
    </div>
  )
}
