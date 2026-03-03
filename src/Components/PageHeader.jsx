import React from "react";
import { NavLink } from "react-router-dom";

const PageHeader = ({ title, Link, badge }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="  bg-[#f3f3ff]   py-20 px-4 rounded-4xl  relative overflow-hidden">
        <h2 className="text-7xl font-bold text-[#0b1030] text-center">
          {title}
        </h2>
        <li className="flex items-center justify-center my-8 py-3 mx-auto px-8 bg-indigo-500 text-white rounded-full text-lg font-semibold w-fit">
          <NavLink to="/" className="text-white hover:underline">
            {Link}
          </NavLink>
          {/* <NavLink to="/">
            {`/${Link2}`}
          </NavLink> */}
          <p>&nbsp;/ {badge}</p>
        </li>
        <div className="w-40 h-40 rounded-full bg-[#dfdefe] absolute -bottom-5 -left-5 opacity-50"></div>
        <div className="w-40 h-40 rounded-full bg-[#dfdefe] absolute -bottom-5 -right-5 opacity-50"></div>
      </div>
    </section>
  );
};

export default PageHeader;
