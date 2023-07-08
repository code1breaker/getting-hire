import React from "react";
import { menus } from "../constant/data";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-xl">
      <nav className="w-[80%] mx-auto py-3 flex justify-between rounded-xl">
        <p className="text-lg font-semibold">Get Hired</p>

        <ul className="flex gap-8 text-gray-600 font-semibold">
          {menus.map((menu) => (
            <li
              key={menu.id}
              className="flex  items-center gap-2 cursor-pointer"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#4b7db1]" : "inactive"
                }
                to={menu.route}
              >
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// text-[#4b7db1]
