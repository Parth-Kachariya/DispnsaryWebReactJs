import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import iconService1 from "../../assets/iconService1.svg";
import iconService2 from "../../assets/iconService2.svg";
import iconService3 from "../../assets/iconService3.svg";
import iconService4 from "../../assets/iconService4.svg";
import iconService5 from "../../assets/iconService5.svg";
import iconService6 from "../../assets/iconService6.svg";
import cardimg1 from "../../assets/images/cardimg1.jpeg";
import cardimg2 from "../../assets/images/cardimg2.jpeg";
import cardimg3 from "../../assets/images/cardimg3.jpeg";
import cardimg4 from "../../assets/images/cardimg4.jpg";
import cardimg5 from "../../assets/images/cardimg5.jpg";
import cardimg6 from "../../assets/images/cardimg6.jpg";

const servicesData = [
  {
    id: 1,
    icon: iconService1,
    heading: "urology",
    description:
      "Regular exams are essential for monitoring your overall health and detecting potential issues early.",
    image: cardimg1,
  },
  {
    id: 2,
    icon: iconService2,
    heading: "neurology",
    description:
      "Special care focuses on providing tailored attention to address unique health needs, ensuring optimal well-being and comfort.",
    image: cardimg2,
  },
  {
    id: 3,
    icon: iconService3,
    heading: "eye care",
    description:
      "Lab testing is vital for accurately monitoring your health and identifying potential issues early for effective treatment.",
    image: cardimg3,
  },
  {
    id: 4,
    icon: iconService4,
    heading: "vaccinations",
    description:
      "Vaccinations are crucial for safeguarding your health and preventing potential illnesses through timely immunization.",
    image: cardimg4,
  },
  {
    id: 5,
    icon: iconService5,
    heading: "chronic care",
    description:
      "Chronic care focuses on managing long-term conditions to improve overall health and enhance quality of life.",
    image: cardimg5,
  },
  {
    id: 6,
    icon: iconService6,
    heading: "pharmacy",
    description:
      "Our pharmacy ensures access to essential medications, providing convenience and expert guidance for your health needs.",
    image: cardimg6,
  },
];

const Card = ({ number }) => {
  console.log(servicesData);

  return (
    <>
      {servicesData.slice(0, number).map((item, id) => {
        return (
          <div
            key={id}
            className="border border-gray-300 rounded-3xl max-w-95  p-8 mx-2 md:mx-0"
          >
            <div className="flex justify-between items-center p-4">
              <div className="flex gap-4 items-center">
                <img
                  className="bg-indigo-500 hover:bg-gray-900 w-13 h-13 rounded-3xl p-3"
                  src={item.icon}
                  alt="icon"
                />
                <h3 className="text-xl font-semibold">{item.heading}</h3>
              </div>
              <span className="cursor-pointer">
                <FaArrowRight className="text-black" />
              </span>
            </div>
            <div className="flex flex-col  text-left gap-6">
              <hr className="text-gray-300" />
              <p>{item.description}</p>
              <img className="rounded-4xl" src={item.image} alt="card image" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
