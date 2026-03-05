import React from "react";
import { NavLink } from "react-router-dom";

const PageHeader = ({ title, Link, badge }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="  bg-[rgb(243,243,255)]   py-20 px-4 rounded-4xl  relative overflow-hidden">
        <h2 className="text-6xl font-bold text-[#0b1030] text-center">
          {title}
        </h2>
        <li className="flex items-center justify-center my-8 py-3 mx-auto px-8 bg-indigo-500 text-white rounded-full text-lg font-semibold w-fit">
          <NavLink to="/" className="text-white hover:underline">
            {Link}
          </NavLink>
          <p>&nbsp;/ {badge}</p>
        </li>
        <div className="w-40 h-40 rounded-full bg-[#dfdefe] absolute -bottom-12 -left-12 opacity-50"></div>
        <div className="w-40 h-40 rounded-full bg-[#dfdefe] absolute -bottom-12 -right-12 opacity-50"></div>
      </div>
    </section>
  );
};

export default PageHeader;
