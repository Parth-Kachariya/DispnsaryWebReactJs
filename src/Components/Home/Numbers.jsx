import React from "react";
import helthimg1 from "../../assets/images/helthimg1.jpeg";
import asset61 from "../../assets/images/asset61.png";
import asset34 from "../../assets/asset34.svg";
import asset35 from "../../assets/images/asset35.png";
import asset37 from "../../assets/images/asset37.jpeg";
import doctor5 from "../../assets/images/doctor5.jpeg";
import doctor6 from "../../assets/images/doctor6.jpeg";
import doctor7 from "../../assets/images/doctor7.jpeg";
import doctor8 from "../../assets/images/doctor8.jpeg";
import asset43 from "../../assets/images/asset43.png";
import google from "../../assets/google.svg";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";

const Numbers = () => {
  const doctors = [doctor5, doctor6, doctor7, doctor8];

  return (
    <section className="max-w-7xl mx-auto px-4 relative overflow-hidden">
      <div className="text-center mb-12 mt-10">
        <div className="flex justify-center items-center gap-2 text-[#5a67d8] mb-4">
          <FaStethoscope size={20} />
          <span className="font-semibold uppercase tracking-wider text-sm">
            Our Numbers
          </span>
        </div>

        <h2 className="max-w-3xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
          Health is wealth, and the medical field
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Excellence in healthcare is our standard, and our numbers back it up.
          From patient satisfaction rates to successful treatment outcomes.
        </p>
      </div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8 my-10">
        {/* Left Card */}
        <div className="flex flex-col sm:flex-row bg-indigo-400/40 p-6 rounded-3xl flex-1">
          <div className="flex flex-col gap-6">
            <img className="w-24" src={asset34} alt="" />
            <h4 className="text-lg md:text-xl font-semibold">
              Your Health, Our Priority in Wellcare
            </h4>
            <button className="p-3 bg-indigo-600 text-white rounded-full text-sm md:text-lg w-fit px-6 hover:bg-gray-900 transition">
              Read More
            </button>
          </div>

          <div className="mt-6 sm:mt-auto sm:ml-auto">
            <img src={asset35} alt="" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img className="rounded-3xl w-full" src={helthimg1} alt="" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Card */}
        <div className="lg:w-1/3">
          <img className="rounded-3xl w-full" src={asset37} alt="" />
        </div>

        {/* Google Review Card */}
        <div className="flex flex-col gap-6 bg-indigo-500/30 p-8 rounded-3xl lg:w-1/3">
          <img className="w-32 mx-auto" src={google} alt="" />

          <h5 className="text-xl md:text-2xl font-bold text-center text-gray-900">
            58M+ Happy Clients
          </h5>
          <div className="flex items-center justify-center -space-x-3">
            <div className="flex -space-x-2">
              {doctors.map((img, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                >
                  <img
                    src={img}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition">
              <CiCirclePlus size={28} className="text-indigo-600" />
            </button>
          </div>
        </div>

        {/* Right Text Card */}
        <div className="flex flex-col sm:flex-row bg-indigo-500/30 p-6 rounded-3xl lg:w-1/3">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg md:text-xl text-gray-900 font-semibold">
              Healing Starts Here Caring for You Always
            </h3>
            <button className="flex items-center gap-2 text-base text-gray-500">
              Learn More <FaArrowRight />
            </button>
          </div>

          <div className="mt-6 sm:mt-auto sm:ml-auto">
            <img className="w-50 md:w-150" src={asset43} alt="" />
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <img
        className="hidden lg:block absolute top-0 -left-40"
        src={asset61}
        alt=""
      />
    </section>
  );
};

export default Numbers;
