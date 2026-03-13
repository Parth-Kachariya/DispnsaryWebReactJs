import React from "react";
import { FaStethoscope } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Video from "./Home/Video";

const VideoSection = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className=" py-10  md:py-20 flex flex-wrap md:flex-nowrap p-2 justify-between">
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-2 text-lg text-indigo-600 font-semibold">
            <FaStethoscope size={25} />
            why choose us
          </p>
          <h3 className="text-gray-900 text-2xl  md:text-5xl max-w-3xl font-bold">
            Why patients trust us with their care
          </h3>
          <p className="text-gray-500 md:text-lg max-w-2xl">
            Our commitment to excellence, compassion, and personalized treatment
            has earned the trust of countless patients. Discover what sets our
            care apart. Discover what sets our care apart.
          </p>
        </div>
        <div className="flex justify-between items-center mt-6 md:mt-0">
          <ul className="flex flex-col gap-5 ">
            <li className="flex  items-center gap-3 text-gray-600">
              <span className="p-1 bg-indigo-500 text-white rounded-full">
                <TiTick />
              </span>
              We offer flexible hours to fit your busy schedule.
            </li>
            <li className="flex  items-center gap-3 text-gray-600">
              <span className="p-1 bg-indigo-500 text-white rounded-full">
                <TiTick />
              </span>
              Team is committed to making you feel comfortable.
            </li>
            <li className="flex  items-center gap-3 text-gray-600">
              <span className="p-1 bg-indigo-500 text-white rounded-full">
                <TiTick />
              </span>
              We ensure you receive prompt and effective care.
            </li>
            <li className="flex  items-center gap-3 text-gray-600">
              <span className="p-1 bg-indigo-500 text-white rounded-full">
                <TiTick />
              </span>
              Helping you manage your health at every stage of life.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Video />
      </div>
    </section>
  );
};

export default VideoSection;
