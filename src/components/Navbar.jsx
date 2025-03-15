import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1F274F] p-2 laptop:p-4 tablet:p-4 sticky top-0 z-auto">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-white text-4xl font-bold font-mainFont">
            Amarsorl
          </div>
        </Link>
        <button className="text-white laptop:hidden" onClick={toggleNavbar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full z-50"
          } fixed inset-0 bg-[#1F274F] laptop:static laptop:bg-transparent laptop:translate-x-0 transform transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="text-white laptop:hidden absolute top-4 right-4"
            onClick={closeNavbar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col laptop:flex-row md:space-x-4">
            <li>
              <Link className="block text-white py-2 px-4 hover:text-[#02b1f0]" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block text-white py-2 px-4 hover:text-[#02b1f0]" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="block text-white py-2 px-4 hover:text-[#02b1f0]" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="block text-white py-2 px-4 hover:text-[#02b1f0]" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
