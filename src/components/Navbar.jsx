import React from "react";
import { NAV_LINKS } from "../constants";

export const Navbar = () => {
  return (
    <nav className="bg-green-800 flexBetween py-2 max-container padding-container">
      <div className="flex items-center justify-evenly space-x-10 p-1">
        <h4 className="text-2xl font-bold text-white text-center">Reeco</h4>
        <ul className="flex items-center justify-between space-x-10">
          {NAV_LINKS.map((link) => (
            <div key={link.key} className="text-white">
              {link.label}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex space-x-10">
        <div>
          <img
            src="/cart.svg"
            alt=""
            width={24}
            height={24}
            className="text-white"
          />
        </div>
        <div className="flex space-x-1">
          <h4 className="text-white font-light">Hello, James</h4>
          <img
            src="/arrow-down.svg"
            alt=""
            width={24}
            height={24}
            className="text-white"
          />
        </div>
      </div>
    </nav>
  );
};
