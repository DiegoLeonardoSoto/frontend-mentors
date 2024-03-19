type Props = {
  isActive: boolean
}

export const Cart = ({ isActive }: Props) => {
  return (
    <div
      className={`${
        isActive ? 'block' : 'hidden'
      }  absolute bg-white top-16 -left-36 z-20 w-80 h-64 shadow-2xl rounded-lg`}
    >
      <p className="text-lg font-bold p-4">Cart</p>
      <hr />
      <div className="flex flex-col items-center justify-center h-48 p-4">
        <p>Your cart is empty</p>

        <button className="w-full bg-primaryOrange p-3 rounded-lg text-white font-bold">
          Checkout
        </button>
      </div>
    </div>
  )
}
