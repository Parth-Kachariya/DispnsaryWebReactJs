import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";
import asset1 from '../assets/asset1.png'
import { CiMenuBurger } from "react-icons/ci";



const Navbar = () => {

  const [open, setOpen] = useState(false)
  

  const activeClass = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-blue-500 border-b md:p-0 cursor-pointer w-fit mx-auto"
      : "block py-2 px-3 text-gray-900 rounded w-fit mx-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0";

  return (
    <>
      <div className=''>
        <nav className="max-w-7xl mx-auto ">
          <div className="  flex  items-center justify-between mx-auto p-4">
            {/* logo div */}
            <div className=''>
              <img src={asset1} alt="Dispnsary Logo" className="h-15" />
            </div>
            {/* Nav div */}
            <div className="hidden text-nowrap text-center w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">

                <li >
                  <NavLink to="/" end className={activeClass}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className={activeClass}>
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/services" className={activeClass}>
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/blog" className={activeClass}>
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className={activeClass}>
                    Contact Us
                  </NavLink>
                </li>



                {/* Dropdown Pages */}
                <li className="relative z-1000">
                  <button
                    onClick={() => setOpen(!open)}
                    className="block py-2 px-3 hover:text-blue-500 cursor-pointer text-black md:p-0 "
                  >
                    Pages <FaAngleDown className="inline ml-1" />
                  </button>

                  {open && (
                    <div className="absolute mt-3 text-nowrap bg-indigo-200 rounded-xl p-3 space-y-2  w-48">
                        <li>

                      <NavLink to="/faq" className={activeClass}>
                        Faq
                      </NavLink>
                        </li>

                      <NavLink to="/doctors" className={activeClass}>
                        Doctors
                      </NavLink>

                      <NavLink to="/doctor-details/1" className={activeClass}>
                        Doctor Details
                      </NavLink>

                      <NavLink to="/login" className={activeClass}>
                        Login
                      </NavLink>

                      <NavLink to="/register" className={activeClass}>
                        Register
                      </NavLink>

                      <NavLink to="/random-page" className={activeClass}>
                        404 Page
                      </NavLink>

                    </div>
                  )}
                </li>

              </ul>
            </div>
            {/* button */}
            <div>
              <button className=" text-nowrap bg-indigo-500 hover:bg-gray-900 text-white text-lg py-2 px-6 rounded-full">
                <NavLink to="/book-appointment">
                  Book Appointment
                </NavLink>
              </button>
            </div>
            {/* mobile menu */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="text-gray-900 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">  
                <CiMenuBurger className="text-3xl" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar