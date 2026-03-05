import React from "react";
import PageHeader from "../Components/PageHeader";
import error404 from "../assets/images/error404.png";
import { NavLink } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-3 md:px-0 ">
        <PageHeader title="Page not found" Link="Home" badge="404 Error" />

        <div className="flex flex-col justify-center p-20">
          <img className="w-200 mx-auto " src={error404} alt="" />
          <h4 className="text-center text-5xl py-3 font-semibold text-gray-900">
            Oops! Page not found
          </h4>
          <p className="py-3 text-gray-500 text-center max-w-xl mx-auto text-lg">
            We searched everywhere but couldn't find what you're looking for.
            Let's find a better place for you to go.
          </p>
          <button className="px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 w-fit mx-auto text-white font-semibold text-lg ">
            <NavLink to="/">Back To Home</NavLink>
          </button>
        </div>
      </section>
    </>
  );
};
export default Error404;
