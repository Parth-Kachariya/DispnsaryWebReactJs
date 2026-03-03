import { FaStethoscope, FaClock } from "react-icons/fa6";
import narse1 from "../assets/images/narse1.jpeg";
import narse2 from "../assets/images/narse2.jpeg";
import Features1 from "../assets/Features1.svg";
import Features2 from "../assets/Features2.svg";
import Features3 from "../assets/Features3.svg";
import { NavLink } from "react-router-dom";

const AboutUsData = () => {
  const Features = [
    { title: "Patient-Centered Care", img: Features1 },
    { title: "Specialist Doctors", img: Features2 },
    { title: "24 Hours Service", img: Features3 },
  ];
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 font-sans text-[#1a202c]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-2 text-[#5a67d8]">
              <FaStethoscope size={20} />
              <span className="font-semibold text-sm">About Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Professionals dedicated to your health
            </h2>

            <p className="text-gray-500 leading-relaxed max-w-lg">
              Our team of skilled professionals is committed to providing
              personalized, compassionate care. With a focus.
            </p>

            <div className="space-y-8 mt-8">
              {Features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#f0f2ff] rounded-full flex items-center justify-center">
                    <img src={item.img} alt="" />{" "}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-snug">
                      Putting you at the heart of everything we do. Our
                      patient-centered approach ensures personalized.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-[#5a67d8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4c51bf] transition-all shadow-lg">
              <NavLink to="/about">View More About Us</NavLink>
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-[60px] overflow-hidden">
              <img
                src={narse2}
                alt="Care"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute top-[10%] left-[-10%] w-[50%] overflow-hidden rounded-[40px] border-[8px] border-white shadow-2xl">
              <img src={narse1} alt="Video Support" className="w-full" />
              <div className="bg-[#0a0a23] text-white text-center py-3 text-xs font-bold tracking-widest uppercase">
                Video Call Support
              </div>
            </div>

            <div className="absolute bottom-[5%] right-[-5%] bg-[#5a67d8] text-white p-8 rounded-[30px] shadow-2xl min-w-[280px]">
              <div className="absolute -top-6 -right-6 bg-[#0a0a23] p-4 rounded-full border-[6px] border-white">
                <FaClock size={36} />
              </div>

              <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
              <div className="space-y-4 font-medium">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Mon To Fri</span>
                  <span>09:30 – 07:30</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Saturday</span>
                  <span>10:30 – 5:00</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Sunday</span>
                  <span className="opacity-80">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsData;
