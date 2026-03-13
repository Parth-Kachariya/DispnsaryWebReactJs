import { useState, useEffect } from "react";
import { FaStethoscope, FaClock, FaUserGroup } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import doctor1 from "../assets/images/doctor1.jpeg";
import doctor2 from "../assets/images/doctor2.jpeg";
import doctor3 from "../assets/images/doctor3.jpeg";
import doctor4 from "../assets/images/doctor4.jpeg";
import heroImg from "../assets/images/heroImg.png";
import HealthCard from "../Components/Services/HealthCard";
import Number from "../Components/Home/Number";
import HelthCare from "../Components/Home/HelthCare";
import Member from "../Components/Home/Member";
import Numbers from "../Components/Home/Numbers";
import Testimonials from "../Components/Home/Testimonials";
import AboutUsData from "../Components/AboutUsData";
import VideoSection from "../Components/VideoSection";
import Steps from "../Components/Steps";
import BlogCard from "../Components/BlogCard";
import OurServices from "../Components/OurServices";
import { NavLink } from "react-router-dom";
const Home = () => {
  const doctors = [doctor1, doctor2, doctor3, doctor4];
  const [count, setCount] = useState(0);
  const target = 35000;

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 100;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCount(current);
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="px-3">
        <div className="relative max-w-7xl mx-auto w-full bg-[#f3f4ff] rounded-3xl overflow-hidden ">
          <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[40%] bg-[#e0e3ff] rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-[#e0e3ff] rounded-full blur-3xl opacity-60" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-2 text-[#5a67d8]">
                <FaStethoscope size={24} />
                <span className="font-semibold tracking-wide text-sm uppercase">
                  Your Health Our Priority
                </span>
              </div>

              <h1 className=" text-3xl md:text-4xl  lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert medical care you can rely on
              </h1>

              <p className="text-gray-500 text-lg max-w-xl   leading-relaxed">
                Experience healthcare you can trust. Our dedicated team provides
                compassionate, high-quality care.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#5a67d8] text-white text-nowrap cursor-pointer px-3 py-2 md:px-8 md:py-4 rounded-full font-semibold hover:bg-[#4c51bf] transition-all shadow-lg shadow-indigo-200">
                  <NavLink to="/book-appointment">Book A Appointment</NavLink>
                </button>
                <button className="bg-[#5a67d8] text-white text-nowrap cursor-pointer px-4 py-2 md:px-10 md:py-4 rounded-full font-semibold hover:bg-[#4c51bf] transition-all">
                  <NavLink to="/about">About Us</NavLink>
                </button>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-bold text-gray-700">
                    Google Rating{" "}
                    <span className="text-yellow-500 ml-1">5.0</span>
                  </span>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    Based On 500 Reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[20px] border-white/40 rounded-full" />
              <img
                src={heroImg}
                alt="Doctor"
                className="relative z-10 w-full max-w-md object-cover"
              />

              <div className="absolute top-[36%] md:top-[45%] left-[3%] md:left-[10%] z-20 bg-white  p-2 md:p-4 rounded-2xl shadow-xl border border-gray-50  md:block">
                <div className="flex -space-x-2 mb-2 pb-1">
                  {doctors.map((img, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                    >
                      <img src={img} alt="avatar" className="object-cover" />
                    </div>
                  ))}
                </div>
                <hr className="text-gray-500" />
                <p className="text-xs font-semibold text-gray-700 pt-2">
                  Talk to our 48+ Doctors
                </p>
              </div>

              <div className="absolute bottom-[6%] md:bottom-[20%] right-[-5%] z-20 bg-white p-2 md:p-4  md:pr-8 rounded-full shadow-xl flex items-center space-x-4 border border-gray-50  md:flex">
                <div className="bg-[#5a67d8] p-3 rounded-full text-white">
                  <FaUserGroup size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800 leading-none">
                    {" "}
                    {count.toLocaleString()}+
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutUsData />
        <OurServices />
        <VideoSection />
        <HealthCard />
        <Number />
        <HelthCare />
        <Member limit={4} showHeading={true} />
        <Numbers />
        <Steps />
        <Testimonials />
        <BlogCard limit={3} showHeader={true} />
      </section>
    </>
  );
};

export default Home;
