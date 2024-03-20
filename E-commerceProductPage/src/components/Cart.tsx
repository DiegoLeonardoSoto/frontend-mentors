type Props = {
  isActive: boolean
}

export const Cart = ({ isActive }: Props) => {
  const cart = []

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
              <img
                className="w-12 h-12 rounded-lg"
                src="../images/image-product-1.jpg"
                alt=""
              />
              <div className="flex flex-col text-darkGrayishBlue">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x 3{' '}
                  <span className="font-bold text-black">$375.00</span>
                </p>
              </div>
              <button>
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
