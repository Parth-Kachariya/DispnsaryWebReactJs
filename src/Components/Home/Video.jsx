import React from "react";
import videoimg from "../../assets/images/videoimg.jpeg";
import whychoose1 from "../../assets/whychoose1.svg";
import whychoose2 from "../../assets/whychoose2.svg";
import whychoose3 from "../../assets/whychoose3.svg";
import { CiPlay1 } from "react-icons/ci";

const Video = () => {
  const stats = [
    {
      title: "50+ Expert Doctor",
      desc: "Our team includes over 50 highly skilled doctors.",
      img: whychoose1,
    },
    {
      title: "24/7 Instant Support",
      desc: "Our team includes over 50 highly skilled doctors.",
      img: whychoose2,
    },
    {
      title: "Expert Medical Team",
      desc: "Our team includes over 50 highly skilled doctors.",
      img: whychoose3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-8 md:pb-15">
      <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden group">
        <img
          src={videoimg}
          alt="Medical Video"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />

        <div className="  absolute top-15 left-0 right-0 md:inset-0 flex items-center justify-center">
          <button className=" size-18  md:size-24 cursor-pointer rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
            <CiPlay1 className="text-white fill-white ml-1" size={30} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-20 pb-12 px-6 md:px-12">
          <div className="w-full h-[1px] bg-white/20 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-start space-x-5 text-white"
              >
                <div className="bg-[#5a67d8] p-4 rounded-2xl shadow-lg">
                  <img src={stat.img} alt="" className="" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{stat.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
