import React from "react";
import PageHeader from "../Components/PageHeader";
import Testimonials from "../Components/Home/Testimonials";
import Backimg from "../assets/Backimg.svg";
import HealthCard from "../Components/Services/HealthCard";
import appointmentItem1 from "../assets/appointmentItem1.svg";
import appointmentItem2 from "../assets/appointmentItem2.svg";
import { CiCalendar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
export const BookAppointment = () => {
  return (
    <section className="max-w-7xl mx-auto px-3">
      <PageHeader
        title="Make an appointment"
        Link="Home"
        badge="Make an appointment"
      />

      <div className="bg-white  my-10 border border-gray-300 w-full max-w-7xl rounded-[3rem] shadow-sm p-6 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
        {/* Left Side: Form */}
        <div className="w-full md:w-3/5">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-4 relative">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-indigo-50/50 border-none rounded-2xl py-4 px-6 text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-indigo-50/50 border-none rounded-2xl py-4 px-6 text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-indigo-50/50 border-none rounded-2xl py-4 px-6 text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-indigo-50/50 border-none rounded-2xl py-4 px-6 text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="w-full bg-indigo-50/50 border-none rounded-2xl py-4 px-6 text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                />
                <CiCalendar className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-900 w-5 h-5" />
              </div>

              <div className="relative w-full">
                <select className="w-full bg-indigo-50/50 border-none rounded-2xl py-4 px-6 text-slate-600 appearance-none focus:ring-2 focus:ring-indigo-200 outline-none transition-all cursor-pointer">
                  <option>Select Service</option>
                  <option>General Consultation</option>
                  <option>Specialized Treatment</option>
                </select>
                <FaChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-900 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <button className="mt-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-sm md:text-lg px-4 py-2 text-white font-bold md:py-4 md:px-10 rounded-full transition-all shadow-lg shadow-indigo-200 active:scale-95">
              Book An Appointment
            </button>
          </form>
        </div>
        <div className="w-full md:w-3/5 space-y-8">
          <div>
            <h2 className=" text-2xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-6">
              Make an appointment
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Schedule your handyman service with ease. Choose a date and time
              that work best for you.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-indigo-50">
                <img src={appointmentItem1} alt="" className=" w-10 md:w-15" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Customer Services
                </h4>
                <p className="text-slate-500 font-medium">+91 – 123 456 7890</p>
              </div>
            </div>
            <hr className="text-gray-200" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-indigo-50">
                <img src={appointmentItem2} alt=""  className=" w-15 md:w-20" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Opening Hours
                </h4>
                <p className="text-slate-500 font-medium">
                  Mon – Sat (09:00 – 21:00 Sunday (Closed))
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HealthCard />

      <Testimonials />
    </section>
  );
};
export default BookAppointment;
