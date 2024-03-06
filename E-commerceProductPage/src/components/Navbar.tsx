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
          <li>
            <a
              className="relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-3.4rem] before:hidden"
              href=""
            >
              Collection
            </a>
          </li>
          <li>
            <a
              className="relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-3.4rem] before:hidden"
              href=""
            >
              {' '}
              Men
            </a>
          </li>
          <li>
            <a
              className="relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-3.4rem] before:hidden"
              href=""
            >
              Women
            </a>
          </li>
          <li>
            <a
              className="relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-3.4rem] before:hidden"
              href=""
            >
              About
            </a>
          </li>
          <li>
            <a
              className="relative hover:before:block before:w-full before:absolute before:h-1 before:bg-primaryOrange before:bottom-[-3.4rem] before:hidden"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="flex gap-10 items-center">
        <button>
          <img src="./images/icon-cart.svg" alt="icon-cart" />
        </button>

        <button className=" border-2 rounded-full border-transparent hover:border-primaryOrange">
          <img
            className="w-7 md:w-14"
            src="./images/image-avatar.png"
            alt="image-avatar"
          />
        </button>
      </div>
    </nav>
  )
}
