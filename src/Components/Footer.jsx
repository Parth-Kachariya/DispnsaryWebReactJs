import React from 'react'
import { FaFacebookF ,FaInstagram ,FaDribbble  } from "react-icons/fa";
import footerLogo from '../assets/footerLogo.png'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";





const Footer = () => {
  return (
    <footer className="max-w-7xl w-full rounded-4xl mx-auto bg-[#0b1030] text-white mb-6">
      <div className='flex flex-col p-8 '>
        {/* content div */}
        <div className='flex justify-between w-full items-center py-5 '>
          {/* logo */}
          <div className='flex flex-col h-50 items-left justify-between '>
            <img className='h-15 w-fit' src={footerLogo} alt="Footer Logo" />
            <p className='w-80 text-lg'>We offer a wide range of healthcare services to meet your needs.</p>
          </div>
          {/* links */}
          <div className='flex justify-between w-4/7 '>
            {/* healthcare */}
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>healthcare</h2>
              <ul className='list-disc pl-6 marker:text-indigo-500 text-lg'>
                <li className='py-1'> <a href="">doctors</a></li>
                <li className='py-1'> <a href="">diagnostics</a></li>
                <li className='py-1'> <a href="">caregiver</a></li>
                <li className='py-1'> <a href="">hospitality</a></li>
                <li className='py-1'> <a href="">emergency</a></li>
              </ul>
            </div>
            {/* quick links */}
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>quick links</h2>
              <ul className='list-disc pl-6 marker:text-indigo-500 text-lg'>
                <li className='py-1'> <a href="">home</a></li>
                <li className='py-1'> <a href="">about us</a></li>
                <li className='py-1'> <a href="">faqs</a></li>
                <li className='py-1'> <a href="">blogs</a></li>
                <li className='py-1'> <a href="">facilities</a></li>
              </ul>
            </div>
            {/* contact us */}
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>contact us</h2>
              <ul className='flex flex-col gap-2 text-lg'>
                <li className='py-1 flex items-center'><CiMail className='text-4xl me-2 p-2 bg-indigo-400/20 rounded-full'/> <a href="">info@domain.com</a></li>
                <li className='py-1 flex items-center'> <IoCallOutline className='text-4xl me-2 p-2 bg-indigo-400/20 rounded-full'/> <a href="">+1 (213) 465 789</a></li>
                <li className='py-1 flex items-center'> <CiLocationOn className='text-4xl me-2 p-2 bg-indigo-400/20 rounded-full'/> <a href="">2464 Royal Ln. Mesa, New Jersey</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        {/* social icon */} 
        <div className='flex justify-between items-center py-6'>
          <hr className='w-full  text-white/20' />
          <div className='flex items-center'>
            <a className='mx-4 p-2 bg-indigo-400/20 rounded-full text-xl' href=""><FaDribbble/></a>
            <a className='mx-2 p-2 bg-indigo-400/20 rounded-full text-xl' href=""><FaFacebookF/></a>
            <a className='mx-4 p-2 bg-indigo-400/20 rounded-full text-xl' href=""><FaInstagram/></a>
          </div>
          <hr className='w-full  text-white/20' />
        </div>
        {/* copy right */}
        <div className='flex justify-between items-center text-lg py-5'>
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
          <p className='flex items-center justify-center'>Privacy Policy <span className='h-2 w-2 bg-indigo-600 rounded-full mx-2 mt-1'></span> Terms & Conditions</p>

        </div>

      </div>
    </footer>
  );
}

export default Footer
