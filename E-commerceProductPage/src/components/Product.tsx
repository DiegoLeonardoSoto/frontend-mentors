import product from '../mock/product.json'
import { Gallery } from './Gallery'

export const Product = () => {
  return (
    <div className="flex px-14 mt-24 gap-36 justify-between">
      <Gallery images={product.images} />

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="uppercase text-sm text-primaryOrange font-bold tracking-wider">
          {product.brand}
        </h2>
        <h1 className="capitalize font-bold text-5xl tracking-wide mt-4">
          {product.title}
        </h1>
        <p className="mt-10 text-darkGrayishBlue">{product.description}</p>
        <div className="flex mt-5">
          <p className="font-bold text-3xl">
            ${((product.price * product.discountPercentage) / 100).toFixed(2)}
          </p>
          <p className="text-base font-bold bg-primaryPaleOrange text-primaryOrange px-2 py-1 rounded-md ml-4 my-auto">
            {product.discountPercentage}%
          </p>
        </div>

        <p className="line-through font-bold text-grayishBlue">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex gap-4 mt-6">
          <div className="flex bg-lightGrayishBlue rounded-lg w-56 items-center justify-around">
            <button>
              <img src="../images/icon-minus.svg" alt="" />
            </button>
            0
            <button>
              <img src="../images/icon-plus.svg" alt="" />{' '}
            </button>
          </div>
          <button className="flex gap-4 bg-primaryOrange text-white w-full rounded-md font-bold justify-center py-3">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
