import React from "react";
import asset25 from "../../assets/images/asset25.jpeg";
import asset26 from "../../assets/images/asset26.jpeg";
import asset27 from "../../assets/images/asset27.jpeg";
import asset28 from "../../assets/images/asset28.jpeg";
import asset60 from "../../assets/images/asset60.png";
import { FaStethoscope } from "react-icons/fa6";

const HealthCardData = [
  {
    id: 1,
    heading: "Create Account",
    description: "Join our community by creating an account today.",
    image: asset25,
  },
  {
    id: 2,
    heading: "search doctor",
    description: "Join our community by creating an account today.",
    image: asset26,
  },
  {
    id: 3,
    heading: "schedule appointment",
    description: "Join our community by creating an account today.",
    image: asset27,
  },
  {
    id: 4,
    heading: "start consultation",
    description: "Join our community by creating an account today.",
    image: asset28,
  },
];
console.log(HealthCardData);

const HealthCard = () => {
  console.log(HealthCardData);

  return (
    <>
      <section className="bg-[#f3f3ff] max-w-7xl mx-auto rounded-3xl relative overflow-hidden mb-10 ">
        <div className=" p-4 md:p-7 ">
          <div className="flex flex-col justify-between items-center gap-5 text-center">
            <p className="flex text-lg text-indigo-700 font-semibold items-center gap-3">
              <FaStethoscope className="mt-1" size={22} /> how we work
            </p>
            <h3 className="text-2xl md:text-4xl text-[#0b1030] font-bold w-full md:max-w-lg">
              We work to achieve better health outcomes
            </h3>
            <p className="md:text-lg w-full md:max-w-2xl text-gray-500">
              We are committed to improving health outcomes through personalized
              care, innovative treatments, and a focus on prevention.
            </p>
          </div>
          <div className="flex flex-wrap mt-10 justify-center ">
            {HealthCardData.map((card, key) => {
              return (
                <div className=" w-75 " key={key}>
                  <div className=" flex flex-col gap-4 p-4 rounded-lg">
                    <img
                      className="rounded-full mx-auto p-4"
                      src={card.image}
                      alt="Health Card"
                    />
                    <div className="relative py-5 md:py-10">
                      <hr className="text-gray-400/60    " />
                      <span className="absolute left-2/5 -top-1 md:top-4 flex w-fit px-4 py-3 bg-indigo-500 rounded-full text-white font-bold">
                        0{card.id}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 py-4 z-1">
                      <h3 className="text-center md:text-left font-semibold text-xl text-gray-900">
                        {card.heading}
                      </h3>
                      <p className="text-center md:text-left max-w-xs text-lg text-gray-700">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src={asset60}
          alt="Asset 60"
          className="w-40  absolute bottom-8 -left-2 opacity-25 md:opacity-70"
        />
      </section>
    </>
  );
};

export default HealthCard;
