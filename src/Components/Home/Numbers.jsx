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

import { FaStethoscope, FaClock, FaUserGroup } from "react-icons/fa6";

const Numbers = () => {
  const doctors = [doctor5, doctor6, doctor7, doctor8];

  return (
    <section className="max-w-7xl mx-auto relative">
      <div className="">
        <div className="text-center mb-16 mt-10">
          <div className="flex justify-center items-center gap-2 text-[#5a67d8] mb-4">
            <FaStethoscope size={20} />
            <span className="font-semibold uppercase tracking-wider text-sm">
              Our Numbers
            </span>
          </div>
          <h2 className=" max-w-3xl mx-auto text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            Health is wealth, and the medical field
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Excellence in healthcare is our standard, and our numbers back it
            up. From patient satisfaction rates to successful treatment
            outcomes.
          </p>
        </div>
        <div className="flex flex-wrap justify-between my-10">
          <div className="flex bg-indigo-400/40 p-6 rounded-4xl   ">
            <div className="flex flex-col w-60 gap-6">
              <img className="w-30" src={asset34} alt="" />
              <h4 className="text-xl font-semibold">
                Your Health, Our Priority in Wellcare
              </h4>
              <button className="p-3 bg-indigo-600 text-white rounded-full text-lg w-40 hover:bg-gray-900">
                Read More
              </button>
            </div>
            <div className="mt-auto">
              <img src={asset35} alt="" />
            </div>
          </div>
          <div className="">
            <img className="rounded-4xl" src={helthimg1} alt="" />
          </div>
        </div>
        <div className="flex justify-between ">
          {/* 1 */}
          <div className="max-w-[32%]">
            <img className="rounded-4xl" src={asset37} alt="" />
          </div>
          {/* 2 */}
          <div className="relative flex flex-col gap-4 bg-indigo-500/30 p-10 rounded-4xl w-full max-w-[32%]">
            <img className="w-40 mx-auto" src={google} alt="" />
            <h5 className="text-2xl font-bold text-center text-gray-900">
              58M+ Happy Clients
            </h5>
            <div className="flex -space-x-2 mb-2 pb-1 mx-auto">
              {doctors.map((img, index) => (
                <div
                  key={index}
                  className="  w-13 h-13 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                >
                  <img src={img} alt="avatar" className="object-cover" />
                </div>
              ))}
            </div>
            <button className="bg-white p-2 rounded-full absolute top-[57%] right-[19%]">
              <CiCirclePlus size={40} color="#615fff" />
            </button>
          </div>
          {/* 3 */}
          <div className="flex bg-indigo-500/30 p-8 pb-1 rounded-4xl max-w-[32%]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-gray-900 font-semibold">
                Healing Starts Here Caring for You Always
              </h3>
              <button className="flex items-center gap-2 text-lg text-gray-500">
                Learn More <FaArrowRight className="mt-1" />{" "}
              </button>
            </div>
            <div className="mt-auto">
              <img className="w-150 mt-auto" src={asset43} alt="" />
            </div>
          </div>
        </div>
        <img className="absolute top-0 -left-40" src={asset61} alt="" />
      </div>
    </section>
  );
};

export default Numbers;
