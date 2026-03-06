import { FaStethoscope } from "react-icons/fa6";
import React from "react";

const Number = () => {
  const stats = [
    {
      percentage: "85%",
      text: "Of our members start with moderate to serve symptom",
      outline: true,
    },
    {
      percentage: "72%",
      text: "Of our members start with moderate to serve symptom",
      outline: false,
    },
    {
      percentage: "95%",
      text: "Of our members start with moderate to serve symptom",
      outline: true,
    },
    {
      percentage: "76%",
      text: "Of our members start with moderate to serve symptom",
      outline: false,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-[#5a67d8] mb-4">
            <FaStethoscope size={20} />
            <span className="font-semibold uppercase tracking-wider text-sm">
              Our Numbers
            </span>
          </div>
          <h2 className=" max-w-4xl mx-auto text-4xl lg:text-6xl font-bold text-[#1a202c] mb-6">
            By the numbers: excellence in health
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Excellence in healthcare is our standard, and our numbers back it
            up. From patient satisfaction rates to successful treatment
            outcomes.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center -space-y-10 lg:-space-y-0 lg:-space-x-12 mt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`w-[320px] h-[320px] rounded-full flex flex-col items-center justify-center text-center p-10 transition-transform hover:z-10 hover:scale-105 duration-300 ${
                item.outline
                  ? "border-[1.5px] border-indigo-600/90 bg-transparent text-[#1a202c]"
                  : "bg-indigo-600 text-white shadow-2xl"
              }`}
            >
              <h3 className="text-5xl font-extrabold mb-4">
                {item.percentage}
              </h3>
              <p
                className={`text-sm leading-relaxed ${item.outline ? "text-gray-600" : "text-indigo-50"}`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Number;
