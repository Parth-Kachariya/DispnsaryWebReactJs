import React from "react";
import PageHeader from "../Components/PageHeader";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { LuLock } from "react-icons/lu";

const Register = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 md:px-0">
      <PageHeader title="Register Page" Link="home" badge="Register" />
      <div className="overflow-hidden  flex items-center justify-center p-10 my-10 font-sans">
        <div className="bg-[#f3f3ff] overflow-hidden relative  w-full max-w-4xl rounded-[3rem] shadow-xl p-8 md:p-16">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Create Account
            </h1>
            <p className="text-slate-500">
              Join our medical community to manage your appointments and health
              records with ease.
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <FiUser
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700"
                size={18}
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-slate-800 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>

            <div className="relative">
              <IoCallOutline
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700"
                size={18}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-slate-800 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>

            <div className="md:col-span-2 relative">
              <MdMailOutline
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700"
                size={18}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-slate-800 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>

            <div className="relative">
              <LuLock
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700"
                size={18}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-slate-800 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>

            <div className="relative">
              <LuLock
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700"
                size={18}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-slate-800 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>

            <div className="md:col-span-2 py-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-indigo-200 text-indigo-600 focus:ring-indigo-100"
                />
                <span className="text-sm text-slate-500">
                  I agree to the{" "}
                  <button className="cursor-pointer text-indigo-600 font-semibold">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className=" cursor-pointer text-indigo-600 font-semibold">
                    Privacy Policy
                  </button>
                </span>
              </label>
            </div>

            <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <p className="text-slate-500 text-sm z-10 ">
                Already have an account?{" "}
                <button className="text-indigo-600 font-bold hover:underline">
                  <NavLink to="/login">Login here</NavLink>
                </button>
              </p>
              <button className="z-10 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-indigo-100 transition-all active:scale-[0.98]">
                Create Account
              </button>
            </div>
          </form>
          <div className="w-40 h-40 rounded-full bg-[#dfdefe] border-gray-400 absolute -bottom-10 -left-10 opacity-30 border"></div>
          <div className="w-40 h-40 rounded-full bg-[#dfdefe] border-gray-400 absolute -bottom-10 -right-10 opacity-30 border"></div>
          <div className="w-40 h-40 rounded-full bg-[#dfdefe] border-gray-400 absolute -top-10 -right-10 opacity-30 border"></div>
          <div className="w-40 h-40 rounded-full bg-[#dfdefe] border-gray-400 absolute -top-10 -left-10 opacity-30 border"></div>
        </div>
      </div>
    </section>
  );
};

export default Register;
