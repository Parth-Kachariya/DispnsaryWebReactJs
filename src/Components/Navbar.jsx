import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import asset1 from '../assets/asset1.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-blue-500 cursor-pointer text-nowrap"
      : "block py-2 px-3 text-gray-900 hover:text-blue-500 text-nowrap";

  return (
    <nav className="bg-white border-b sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <img src={asset1} alt="Logo" className="h-12" />
        </div>

        {/* Overlay (Mobile Only) */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* Sidebar / Navigation */}
        <div
          className={`fixed top-0 left-0 h-full w-1/2 bg-white z-50 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:h-auto lg:w-auto lg:bg-transparent lg:block`}
        >
          {/* Close Button (Mobile) */}
          <div className="flex justify-end p-4 lg:hidden">
            <button onClick={() => setOpen(false)} className="text-2xl">
              <IoClose />
            </button>
          </div>

          <ul className="font-medium flex flex-col px-6 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8 lg:px-0 items-start lg:items-center">
            
            <li><NavLink to="/" end className={activeClass} onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={activeClass} onClick={() => setOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/services" className={activeClass} onClick={() => setOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/blog" className={activeClass} onClick={() => setOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={activeClass} onClick={() => setOpen(false)}>Contact Us</NavLink></li>

            {/* Dropdown */}
            <li className="w-full lg:w-auto">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center py-2 text-black hover:text-blue-500"
              >
                Pages
                <FaAngleDown className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`${dropdownOpen ? "flex" : "hidden"} flex-col bg-indigo-100 rounded-xl p-3 space-y-2 mt-2 lg:absolute lg:mt-3 lg:w-48`}>
                <NavLink to="/faq" className={activeClass} onClick={() => {setOpen(false); setDropdownOpen(false)}}>Faq</NavLink>
                <NavLink to="/doctors" className={activeClass} onClick={() => {setOpen(false); setDropdownOpen(false)}}>Doctors</NavLink>
                <NavLink to="/doctor-details/1" className={activeClass} onClick={() => {setOpen(false); setDropdownOpen(false)}}>Doctor Details</NavLink>
                <NavLink to="/login" className={activeClass} onClick={() => {setOpen(false); setDropdownOpen(false)}}>Login</NavLink>
                <NavLink to="/register" className={activeClass} onClick={() => {setOpen(false); setDropdownOpen(false)}}>Register</NavLink>
                <NavLink to="/random-page" className={activeClass} onClick={() => {setOpen(false); setDropdownOpen(false)}}>404 Page</NavLink>
              </div>
            </li>

            {/* Mobile Book Appointment */}
            <li className="pt-4 lg:hidden w-full">
              <NavLink
                to="/book-appointment"
                onClick={() => setOpen(false)}
                className="block text-center bg-indigo-500 text-white py-2 px-6 rounded-full w-full"
              >
                Book Appointment
              </NavLink>
            </li>

          </ul>
        </div>

        {/* Desktop Book Appointment */}
        <div className="hidden lg:block">
          <NavLink
            to="/book-appointment"
            className="text-nowrap bg-indigo-500 hover:bg-gray-900 text-white py-3 px-6 rounded-full transition-all"
          >
            Book Appointment
          </NavLink>
        </div>

        {/* Burger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(true)} className="text-gray-900 text-3xl">
            <CiMenuBurger />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;