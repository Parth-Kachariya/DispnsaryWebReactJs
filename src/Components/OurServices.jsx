import React from "react";
import { FaStethoscope } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Stethoscope1 from "../assets/images/Stethoscope1.png";
import Card from "./Services/Card";

const OurServices = () => {
  return (
    <section>
      <div className=" max-w-7xl mx-auto rounded-3xl bg-[#f8f9ff] py-10 md:py-25 px-3 relative overflow-hidden ">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="flex justify-center items-center space-x-2 text-[#5a67d8] mb-4">
            <FaStethoscope size={25} />
            <span className="font-bold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className=" text-2xl  md:text-4xl max-w-2xl mx-auto lg:text-5xl font-bold text-[#1a202c]">
            Comprehensive services for your health
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card number={3} />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-8 md:mt-16 space-y-8">
          <p className="text-gray-500 md:text-lg leading-relaxed px-4">
            From preventive care to specialized treatments, our wide range of
            services is designed to support your health at every stage.
          </p>
          <button className="bg-[#5a67d8] text-white  px-4 py-3 md:px-10 md:py-4 rounded-full font-semibold hover:bg-[#4c51bf] transition-all shadow-lg shadow-indigo-100">
            <NavLink to="/services">View All Services</NavLink>
          </button>
        </div>

        <img
          src={Stethoscope1}
          className="absolute bottom-0 md:bottom-[-20px] right-0 w-20 md:w-48 md:opacity-80 block"
          alt="deco"
        />
      </div>
    </section>
  );
};

export default OurServices;
