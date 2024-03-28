import { useState } from 'react'
import { Cart } from './Cart'
import { useCart } from '../hooks/useCart'

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const { cart } = useCart()

  return (
    <nav className="h-20 flex items-center justify-center w-full flex-1">
      <div className="flex w-full justify-between h-full shadow-[0_2px_2px_-2px_rgba(0,0,0,0.2)]">
        <div className="flex items-center">
          <img className="hidden" src="../images/icon-menu.svg" alt="" />
          <img src="../images/logo.svg" alt="" />

          <ul className="md:flex items-center gap-8 text-darkGrayishBlue hidden ml-12">
            <li className="cursor-pointer h-full relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-29px] before:hidden">
              Collection
            </li>
            <li className="cursor-pointer h-full relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-29px] before:hidden">
              Men
            </li>
            <li className="cursor-pointer h-full relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-29px] before:hidden">
              Women
            </li>
            <li className="cursor-pointer h-full relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-29px] before:hidden">
              About
            </li>
            <li className="cursor-pointer h-full relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-29px] before:hidden">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex gap-8 items-center relative">
          <button onClick={() => setIsActive((prev) => !prev)}>
            <span
              className={`${
                cart[0]?.quantity > 0 ? '' : 'hidden'
              } bg-primaryOrange px-2  text-xs absolute top-6 z-10 rounded-full text-white`}
            >
              {cart[0]?.quantity}
            </span>
            <img
              src="./images/icon-cart.svg"
              alt="icon-cart"
              className="hover:brightness-0"
            />
          </button>
          {/* Cart */}
          <Cart isActive={isActive} />

          <img
            onClick={() => setIsActive((prev) => !prev)}
            className="cursor-pointer w-7 md:w-12 my-4 rounded-full hover:outline hover:outline-2 hover:outline-primaryOrange"
            src="./images/image-avatar.png"
            alt="image-avatar"
          />
        </div>
      </div>
    </nav>
  )
}
