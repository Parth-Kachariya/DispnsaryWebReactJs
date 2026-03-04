import React from "react";
import asset44 from "../assets/images/asset44.png";
import heroImg from "../assets/images/heroImg.png";
import { NavLink } from "react-router-dom";
const Steps = () => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-[3rem] bg-[#0b1030] px-8 py-20 text-white shadow-2xl">
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="flex justify-center md:justify-start">
            <img
              src={asset44}
              alt="Dental Tools"
              className="absolute -bottom-20 left-20 h-auto w-64 md:w-80 object-contain transform "
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <h1 className=" mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Take the first step to better health
            </h1>

            <button className="mb-4 rounded-full bg-[#536de6] px-10 py-4 text-lg font-semibold transition-all hover:bg-[#435bc7] hover:scale-105 active:scale-95 shadow-lg">
              <NavLink to="/book-appointment">Book A Appointment Now</NavLink>
            </button>

            <p className="text-sm font-medium text-slate-300">
              It only{" "}
              <span className="text-white font-bold">takes 2 minutes</span> to
              complete
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Doctor"
              className="h-auto w-72 md:w-full max-w-xs object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
