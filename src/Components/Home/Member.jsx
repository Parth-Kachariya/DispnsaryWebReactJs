import React from "react";
import {
  FaStethoscope,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Images import
import member1 from "../../assets/images/member1.jpeg";
import member2 from "../../assets/images/member2.jpeg";
import member3 from "../../assets/images/member3.jpeg";
import member4 from "../../assets/images/member4.jpeg";
import member5 from "../../assets/images/member5.jpg";
import member6 from "../../assets/images/member6.jpg";
import member7 from "../../assets/images/member7.jpg";
import member8 from "../../assets/images/member8.jpg";

const Member = ({ limit, showHeading = true }) => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Esther Howard",
      specialty: "Ophthalmology",
      image: member1,
    },
    {
      id: 2,
      name: "Dr. Jenny Wilson",
      specialty: "Anesthesiology",
      image: member2,
    },
    {
      id: 3,
      name: "Dr. Kristin Watson",
      specialty: "Infectious Disease",
      image: member3,
    },
    {
      id: 4,
      name: "Dr. Arlene Mccoy",
      specialty: "Cardiology",
      image: member4,
    },
    {
      id: 5,
      name: "Dr. Michael Jhonson",
      specialty: "Orthopedics",
      image: member5,
    },
    { id: 6, name: "Dr. Sarah Lee", specialty: "Pediatrics", image: member6 },
    { id: 7, name: "Dr. James Smith", specialty: "Neurology", image: member7 },
    {
      id: 8,
      name: "Dr. Rachel Davis",
      specialty: "Dermatology",
      image: member8,
    },
  ];

  const socialIcons = [
    { icon: <FaInstagram size={18} />, href: "#" },
    { icon: <FaFacebookF size={18} />, href: "#" },
    { icon: <FaDribbble size={18} />, href: "#" },
  ];

  // Display limited members if limit prop is provided
  const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <section className=" py-10 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto ">
        {showHeading && (
          <div className="text-center mb-10 md:mb-20 space-y-4">
            <div className="flex justify-center items-center gap-2 text-[#5a67d8]">
              <FaStethoscope size={20} />
              <span className="font-semibold uppercase tracking-wider text-sm">
                Team Members
              </span>
            </div>
            <h2 className=" text-2xl md:text-4xl lg:text-6xl max-w-5xl mx-auto font-bold text-[#1a202c]">
              Compassionate experts you can trust
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Our team brings together a wealth of experience, passion, and a
              dedication to excellence in patient care.
            </p>
          </div>
        )}

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedMembers.map((member, index) => (
            <div key={index} className="relative group overflow-visible mb-12">
              <div className="w-full h-[500px] rounded-[40px] overflow-hidden shadow-lg shadow-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  onClick={() => navigate(`/doctor-details/${member.id}`)}
                  className="w-full h-full cursor-pointer object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-[25px] p-6 text-center shadow-xl border border-gray-100 z-10 group-hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center gap-4 text-indigo-400 mb-4">
                  {socialIcons.map((social, sIndex) => (
                    <a
                      key={sIndex}
                      href={social.href}
                      className="hover:text-[#5a67d8] transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-[#1a202c] mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-500 text-sm">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
