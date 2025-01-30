import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"; // Ensure the path is correct
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // State for Solutions menu

  const toggleSolutions = () => {
    setIsSolutionsOpen((prev) => !prev);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-6" />
            </Link>
          </div>

          {/* Menu for Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-white">
            <ul className="flex items-center space-x-14">
              <li className="relative group">
                <span className="cursor-pointer flex items-center gap-1">
                  Solutions <FaAngleDown />
                </span>
                <ul className="w-48 absolute left-0 hidden mt-1 space-y-2 bg-white text-black group-hover:block rounded-md">
                  <li className="border-b border-gray-200 px-2 py-2 hover:text-blue-500">
                    <Link> AnyCaaS</Link>
                  </li>
                  <li className="border-b border-gray-200 px-2 py-2 hover:text-blue-500">
                    <Link>AnyBaaS</Link>
                  </li>
                  <li className="border-b border-gray-200 px-2 py-2 hover:text-blue-500">
                    <Link>AnyPaaS</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Service</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link className="border rounded-full px-4 py-2 flex items-center gap-1">
                  <TbWorld />
                  EN
                  <FaAngleDown />
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link to="#">
              <button className="cursor-pointer group flex items-center gap-1 bg-transparent hover:bg-white hover:text-blue-500 hover:shadow-2xl text-white font-semibold text-lg border px-4 py-2 rounded-lg transition duration-300">
                Contact Us
                <FaAngleRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" />
              </button>
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none text-3xl"
            >
              {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-100%]"
        }  bg-blue-500 text-white p-4`}
      >
        <ul className="space-y-4">
          <li className="relative">
            <span
              onClick={toggleSolutions}
              className="cursor-pointer flex justify-between items-center gap-1"
            >
              Solutions <FaAngleDown />
            </span>
            {/* Use isSolutionsOpen state to control visibility */}
            {isSolutionsOpen && (
              <ul className="left-0 mt-2 space-y-2 p-4">
                <li>AnyCaaS</li>
                <li>AnyBaaS</li>
                <li>AnyPaaS</li>
              </ul>
            )}
          </li>
          <li>
            <Link to="" className="hover:text-gray-400">
              Service
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li className="flex justify-center">
            <div className="md:w-2/12 text-center">
              <Link className="border rounded-full px-4 py-2 flex items-center gap-1">
                <TbWorld />
                EN
                <FaAngleDown />
              </Link>
            </div>
          </li>
          <li>
            <Link to="#">
              <button className="w-full text-center cursor-pointer group flex justify-center items-center gap-1 bg-transparent hover:bg-white hover:text-blue-500 hover:shadow-2xl text-white font-semibold text-lg border px-4 py-2 rounded-lg transition duration-300 shadow-2xl">
                Contact Us
                <FaAngleRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
