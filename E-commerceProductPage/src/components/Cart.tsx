import { useCart } from '../hooks/useCart'

type Props = {
  isActive: boolean
}

export const Cart = ({ isActive }: Props) => {
  const { cart, removeToCart } = useCart()

  return (
    <div
      className={`${
        isActive ? 'block' : 'hidden'
      }  absolute bg-white top-16 -left-36 z-20 w-[21rem] h-64 shadow-2xl rounded-lg`}
    >
      <p className="text-lg font-bold p-4">Cart</p>
      <hr />
      <div className="flex flex-col items-center justify-center h-48 p-4">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="w-full">
            <div className="flex mb-6 gap-4">
              <img className="w-12 h-12 rounded-lg" src={cart[0].img} alt="" />
              <div className="flex flex-col text-darkGrayishBlue">
                <p>{cart[0].title}</p>
                <p>
                  ${cart[0].price} x {cart[0].quantity}{' '}
                  <span className="font-bold text-black">
                    ${cart[0].totalPrice}
                  </span>
                </p>
              </div>
              <button onClick={() => removeToCart(cart[0])}>
                <img src="public/images/icon-delete.svg" alt="" />
              </button>
            </div>
            <button className="w-full bg-primaryOrange p-3 rounded-lg text-white font-bold">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
