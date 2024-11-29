import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline max-sm:justify-end max-sm:flex-1 gap-7">
          <img src={searchImg} alt="search" />
          <img src={bagImg} alt="bag" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
