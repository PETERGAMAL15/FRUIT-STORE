import { useState } from "react";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";
const NavBarMenu = [
  {
    id: 1,
    tittle: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Products",
    url: "/products",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Shop",
    url: "/shop",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4">
          {/* logo section  */}
          <Logo />
          {/* menu section  */}
          <Menu />
          {/* Mobile Hamburger menu section  */}
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
      </nav>
      {/* Mobile Menu section */}
      <ResponsiveMenu open={isOpen} />
    </>
  );
};

function Menu() {
  return (
    <div className=" hidden md:block">
      <ul className="flex text-gray-600 gap-6">
        {NavBarMenu.map((link) => (
          <li key={link.id} className="text-xl">
            <a
              href={link.url}
              className=" inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444]">
              {link.title}
            </a>
          </li>
        ))}
        <button className="text-2xl p-2 rounded-full hover:bg-primary hover:text-white duration-200">
          <MdOutlineShoppingCart />
        </button>
      </ul>
    </div>
  );
}

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <div className=" md:hidden block">
      <MdMenu className={`text-4xl`} onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
}

export default NavBar;
