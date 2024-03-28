import { useCart } from '../hooks/useCart'
import { useQuantity } from '../hooks/useQuantity'
import { TProduct } from '../types/product'

export const ProductContent = ({
  id,
  brand,
  title,
  price,
  discountPercentage,
  description,
  images
}: TProduct) => {
  const { addToCart } = useCart()
  const { quantity, decreseQuantity, increseQuantity } = useQuantity()
  const currentPrice = ((price * discountPercentage) / 100).toFixed(2)

  const addCart = () => {
    const totalPrice = (+currentPrice * quantity).toFixed(2)
    const product = {
      id,
      title,
      price: currentPrice,
      quantity,
      totalPrice: totalPrice,
      img: images[0].img
    }

    addToCart(product)
  }

  return (
    <section className=" ml-12">
      <h2 className="uppercase text-primaryOrange font-bold mb-4">{brand}</h2>
      <h1 className="capitalize font-bold text-[2.5rem] mb-8">{title}</h1>
      <p className=" text-darkGrayishBlue mb-4">{description}</p>
      <div className="flex mt-5">
        <p className="font-bold text-3xl">${currentPrice}</p>
        <p className="text-base font-bold bg-primaryPaleOrange text-primaryOrange px-2 py-1 rounded-md ml-4 my-auto">
          {discountPercentage}%
        </p>
      </div>

      <p className="line-through font-bold text-grayishBlue">
        ${price.toFixed(2)}
      </p>
      <div className="flex gap-4 mt-6">
        <div className="flex bg-lightGrayishBlue rounded-lg w-56 items-center justify-around">
          <button onClick={decreseQuantity} className="hover:opacity-50">
            <img src="../images/icon-minus.svg" alt="" />
          </button>
          {quantity}
          <button onClick={increseQuantity} className="hover:opacity-50">
            <img src="../images/icon-plus.svg" alt="" />{' '}
          </button>
        </div>
        <button
          onClick={addCart}
          className="flex gap-3 bg-primaryOrange text-white w-full rounded-md font-bold justify-center p-4 cursor-pointer hover:opacity-50"
        >
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
    </section>
  )
}
