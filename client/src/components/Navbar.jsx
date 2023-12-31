import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCrossCircled } from "react-icons/rx";
import { useEffect, useState } from "react";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <nav
        className={`${isSticky} ? fixed top-0 z-20 bg-white : "" `" border-2 border-slate-100 py-3 px-4 
      rounded-md shadow-lg flex items-center justify-between mb-10 "}
      >
        <NavLink
          to="/"
          className="lg:text-3xl text-2xl font-semibold cursor-pointer"
        >
          Home
        </NavLink>

        <div className="">
          <RxHamburgerMenu
            className="w-[2rem] h-[1.5rem] z-20 lg:hidden"
            onClick={() => setSideBar(true)}
          />
          <div className="relative">
            <ul
              className={
                sideBar
                  ? `lg:flex lg:gap-5 flex flex-col h-screen w-[15rem] fixed top-0 right-0 z-10 bg-white shadow-lg px-5 pt-[4rem]`
                  : "hidden lg:flex lg:gap-4"
              }
            >
              <li>
                <RxCrossCircled
                  className="text-2xl text-red-600 absolute top-8 left-[1rem] cursor-pointer z-30 lg:hidden"
                  onClick={() => setSideBar(false)}
                />
              </li>
              <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded-md py-2 px-3">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded-md py-2 px-3">
                <NavLink to="/add-project">Add Project</NavLink>
              </li>
              <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded-md py-2 px-3">
                <NavLink to="/add-cohort">Add Cohorts</NavLink>
              </li>
              <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded-md py-2 px-3">
                <NavLink to="/cohorts">Projects/Cohorts</NavLink>
              </li>
              <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded-md py-2 px-3">
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li className="cursor-pointer hover:bg-blue-500 hover:text-white rounded-md py-2 px-3">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
