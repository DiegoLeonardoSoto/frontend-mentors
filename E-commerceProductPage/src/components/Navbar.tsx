export const Navbar = () => {
  return (
    <nav className="h-20 flex items-center justify-center w-full flex-1">
      <div className="flex w-full justify-between h-full shadow-[0_2px_2px_-2px_rgba(0,0,0,0.2)]">
        <div className="flex items-center">
          <img className="hidden" src="../images/icon-menu.svg" alt="" />
          <img src="../images/logo.svg" alt="" />

          <div></div>
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

        {/* Cart */}
        <div className="flex gap-8 items-center relative">
          <button>
            <span className="hidden bg-primaryOrange px-2  text-xs absolute top-6 z-10 rounded-full text-white">
              3
            </span>
            <img
              src="./images/icon-cart.svg"
              alt="icon-cart"
              className="hover:brightness-0"
            />
          </button>

          <div className="hidden absolute bg-white top-16 -left-36 z-20 w-80 h-64 shadow-2xl rounded-lg">
            <p className="text-lg font-bold p-4">Cart</p>
            <hr />
            <div className="flex flex-col items-center justify-center h-48 p-4">
              <p>Your cart is empty</p>

              <button className="w-full bg-primaryOrange p-3 rounded-lg text-white font-bold">
                Checkout
              </button>
            </div>
          </div>

          <img
            className="cursor-pointer w-7 md:w-12 my-4 rounded-full hover:outline hover:outline-2 hover:outline-primaryOrange"
            src="./images/image-avatar.png"
            alt="image-avatar"
          />
        </div>
      </div>
    </nav>
  )
}
