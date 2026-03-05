import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import AboutUsData from "../Components/AboutUsData";
import VideoSection from "../Components/VideoSection";
import HealthCard from "../Components/Services/HealthCard";
import Member from "../Components/Home/Member";
import Testimonials from "../Components/Home/Testimonials";
import HelthCare from "../Components/Home/HelthCare";
import Steps from "../Components/Steps";
import { FaCheckCircle } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import missionImage from "../assets/images/missionImage.jpg";
import ourApproachImg from "../assets/images/ourApproachImg.jpg";
import Stethoscope1 from "../assets/images/Stethoscope1.png";
import facility1 from "../assets/facility1.svg";
import facility2 from "../assets/facility2.svg";

const AboutUs = () => {
  const listItems = [
    "Quality healthcare for all.",
    "Wellness through innovation.",
    "Compassion at every step.",
    "Building a healthier future.",
  ];
  const [activeTab, setActiveTab] = useState("Vision");
  const features = [
    {
      icon: facility1,
      title: "Modern Equipment",
      description:
        "Our mission is to deliver modern equipment that ensures efficiency, reliability, and superior performance for.",
    },
    {
      icon: facility2,
      title: "Highly Qualified Doctor",
      description:
        "We ensure patient care through highly qualified doctors, offering expertise, trust, and personalized attention.",
    },
    {
      icon: facility1,
      title: "Pain – Free Treatment",
      description:
        "Experience pain-free treatment with advanced techniques and compassionate care, ensuring your comfort at every step.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-3 md:px-0">
      <PageHeader title="About us" Link="Home" badge="About Us" />
      <AboutUsData />
      <section>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-7xl overflow-hidden rounded-[3.5rem] bg-[#f3f4ff] p-12">
            <div className="absolute -bottom-10 right-0 opacity-20 md:opacity-70">
              <img
                src={Stethoscope1}
                alt=""
                className="h-80 w-auto object-contain"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[2.5rem] shadow-sm">
                <img
                  src={ourApproachImg}
                  alt="Medical Consultation"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-2 font-semibold text-[#536de6]">
                  <FaStethoscope size={20} />
                  <span className="text-sm uppercase tracking-wider">
                    Our Approach
                  </span>
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0a0e27] md:text-5xl lg:text-5xl">
                  Providing personalized healthcare
                </h2>

                <p className="mb-10 max-w-xl  text-lg text-slate-500 leading-relaxed">
                  We focus on personalized care to meet your unique needs,
                  combining innovation and compassion for a truly
                  patient-centered approach.
                </p>
                <div className="mb-12 flex flex-wrap gap-4">
                  {["Our Vision", "Our Mission", "Our Value"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.split(" ")[1])}
                      className={`rounded-full px-8 py-3 font-semibold transition-all ${
                        activeTab === tab.split(" ")[1]
                          ? "bg-[#536de6] text-white shadow-lg"
                          : "bg-white text-[#536de6] hover:bg-slate-50"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[2rem]">
                    <img
                      src={missionImage}
                      alt="Medical Team"
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <ul className="space-y-4">
                    {listItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-[#0a0e27] font-medium"
                      >
                        <FaCheckCircle
                          className="text-indigo-600"
                          size={22}
                          fill="currentColor"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoSection />
      <HealthCard />
      <Member />
      <section className="relative overflow-hidden bg-[#f3f4ff] px-6 py-24 font-sans rounded-[3.5rem] mx-4 my-8">
        <div className="absolute bottom-0 right-0 opacity-80">
          <img
            src={Stethoscope1}
            alt=""
            className="h-96 w-auto object-contain "
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-[#536de6] font-semibold">
              <FaStethoscope size={20} />
              <span className="text-sm uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h2 className="mb-6 text-4xl flex max-w-3xl mx-auto font-bold text-[#0a0e27] lg:text-5xl">
              Professionals dedicated to your health
            </h2>
            <p className="mx-auto max-w-xl text-slate-500 leading-relaxed">
              Our team of skilled professionals is committed to providing
              personalized, compassionate care. With a focus.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 -z-1">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-start rounded-[3rem] bg-white p-10 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#536de6] text-white">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-[#0a0e27]">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 flex items-center justify-center gap-3 text-sm md:text-base">
            <span className="rounded-full bg-[#536de6] px-4 py-1 text-xs font-bold text-white uppercase tracking-tight">
              Free
            </span>
            <p className="text-slate-600">
              Let's make something great work together.
              <a
                href="#"
                className="ml-1 font-bold text-[#536de6] underline underline-offset-4 hover:text-[#435bc7]"
              >
                Get Free Quote
              </a>
            </p>
          </div>
        </div>
      </section>
      <Steps />
      <HelthCare />
      <Testimonials />
    </section>
  );
};

export default AboutUs;
