import React, { useState } from "react";
import logo from "../../assets/images/logo1Degree.avif";
import SearchDrawer from "../../components/SearchDrawer";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  return (
    <nav className=" bg-black ">
      <div className="w-full mx-auto h-20 px-5">
        <div className="flex justify-between items-center h-full  ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className="flex gap-6 mt-3 items-center">
              <li>
                <NavLink
                  className="text-white no-underline hover:border-white border-transparent border-b-2"
                  to="/collection/new-in"
                >
                  NEW IN
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white no-underline hover:border-white border-transparent border-b-2"
                  to="/collection/all-men"
                >
                  MEN
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white no-underline hover:border-white border-transparent border-b-2"
                  to="/collection/all-women"
                >
                  WOMEN
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white no-underline  hover:border-white border-transparent border-b-2"
                  to="/collection/summer-sale-2025"
                >
                  UPTO 50% OFF{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
          <div className="text-3xl flex gap-4 items-center">
            <span onClick={toggleDrawer} className="cursor-pointer">
              <CiSearch />
            </span>
            <span>
              <MdOutlineShoppingCart />
            </span>
          </div>
        </div>
      </div>
      <SearchDrawer open={isDrawerOpen} onClose={toggleDrawer} />
    </nav>
  );
}

export default Nav;
