import React from 'react'
import { FaFacebookF ,FaInstagram ,FaDribbble  } from "react-icons/fa";
import footerLogo from '../assets/footerLogo.png'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="max-w-7xl w-full rounded-4xl mx-auto bg-[#0b1030] text-white mb-6 px-4 mx-2">
      <div className='flex flex-col p-6 md:p-8'>

        {/* content div */}
        <div className='flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-10 py-5'>

          {/* logo */}
          <div className='flex flex-col gap-4 max-w-sm'>
            <img className='h-14 w-fit' src={footerLogo} alt="Footer Logo" />
            <p className='text-lg'>
              We offer a wide range of healthcare services to meet your needs.
            </p>
          </div>

          {/* links */}
          <div className='flex flex-col sm:flex-row flex-wrap justify-between w-full lg:w-4/7 gap-14'>

            {/* healthcare */}
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-bold capitalize'>healthcare</h2>
              <ul className='list-disc pl-6 marker:text-indigo-500 text-lg'>
                <li className='py-1'><a href="">doctors</a></li>
                <li className='py-1'><a href="">diagnostics</a></li>
                <li className='py-1'><a href="">caregiver</a></li>
                <li className='py-1'><a href="">hospitality</a></li>
                <li className='py-1'><a href="">emergency</a></li>
              </ul>
            </div>

            {/* quick links */}
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-bold capitalize'>quick links</h2>
              <ul className='list-disc pl-6 marker:text-indigo-500 text-lg'>
                <li className='py-1'><a href="">home</a></li>
                <li className='py-1'><a href="">about us</a></li>
                <li className='py-1'><a href="">faqs</a></li>
                <li className='py-1'><a href="">blogs</a></li>
                <li className='py-1'><a href="">facilities</a></li>
              </ul>
            </div>

            {/* contact us */}
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-bold capitalize'>contact us</h2>
              <ul className='flex flex-col gap-3 text-lg'>
                <li className='flex items-start'>
                  <CiMail className='text-3xl me-3 p-2 bg-indigo-400/20 rounded-full shrink-0'/>
                  <a href="">info@domain.com</a>
                </li>
                <li className='flex items-start'>
                  <IoCallOutline className='text-3xl me-3 p-2 bg-indigo-400/20 rounded-full shrink-0'/>
                  <a href="">+1 (213) 465 789</a>
                </li>
                <li className='flex items-start'>
                  <CiLocationOn className='text-3xl me-3 p-2 bg-indigo-400/20 rounded-full shrink-0'/>
                  <a href="">2464 Royal Ln. Mesa, New Jersey</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* social icon */}
        <div className='flex flex-col sm:flex-row items-center gap-6 py-6'>
          <hr className='w-full text-white/20' />
          <div className='flex items-center'>
            <a className='mx-3 p-2 bg-indigo-400/20 rounded-full text-xl' href=""><FaDribbble/></a>
            <a className='mx-3 p-2 bg-indigo-400/20 rounded-full text-xl' href=""><FaFacebookF/></a>
            <a className='mx-3 p-2 bg-indigo-400/20 rounded-full text-xl' href=""><FaInstagram/></a>
          </div>
          <hr className='w-full text-white/20' />
        </div>

        {/* copy right */}
        <div className='flex flex-col md:flex-row justify-between items-center text-lg py-5 gap-4 text-center md:text-left'>
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
          <p className='flex items-center justify-center flex-wrap'>
            Privacy Policy
            <span className='h-2 w-2 bg-indigo-600 rounded-full mx-2'></span>
            Terms & Conditions
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer