export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 md:py-8 md:border-b-[1px] md:border-grayishBlue">
      <div className="flex md:gap-16">
        <div className="flex items-center gap-5">
          <button className="md:hidden">
            <img src="public/images/icon-menu.svg" alt="" />
          </button>
          <a href="" className="w-36">
            <img src="/images/logo.svg" alt="" />
          </a>
        </div>

        <ul className="md:flex gap-16 text-darkGrayishBlue hidden">
          <li className="relative">
            <a href="">Collection</a>
            <span className="block w-full bg-primaryOrange h-1 absolute bottom-[-3.2rem]"></span>
          </li>
          <li>
            <a href=""> Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <ul className="flex gap-10 items-center">
        <li>
          <button>
            <img src="./images/icon-cart.svg" alt="icon-cart" />
          </button>
        </li>
        <li>
          <button>
            <img
              className="w-7 md:w-14"
              src="./images/image-avatar.png"
              alt="image-avatar"
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}
