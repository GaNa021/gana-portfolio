import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/constants";
import { close, menu } from "../../../portfolio/src/assets";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [active, setActive] = useState("'");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="text-white w-full flex item-center py-5 fixed top-0 z-20">
      <div className="sm:hidden flex">
        <SocialLinks Styles="list-none flex flex-row gap-4 justify-end items-start" />
      </div>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div></div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-slate-400"
              } hover:text-white font-sans p-1 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer mr-5"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-white-100 justify-center pt-4 pb-4`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-slate-400"
                  } hover:text-white font-sans text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
