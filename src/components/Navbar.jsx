import { styles } from "../styles.js";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gray-300/50`}
    >
      <div className="w-full flex justify-between items-center mx-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="" className="w-9 h-9 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer flex">
            Mohiuddin &nbsp;
            <span className="lg:block hidden">| Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-gray-500" : "text-black"
              } hover:text-gray-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt=""
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6
          black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10
          rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  }font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(Link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
