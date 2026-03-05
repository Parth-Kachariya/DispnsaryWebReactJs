import React from "react";
import { FaStethoscope, FaArrowRightLong } from "react-icons/fa6";

import asset49 from "../assets/images/asset49.jpeg";
import asset50 from "../assets/images/asset50.jpeg";
import asset51 from "../assets/images/asset51.jpeg";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";

const BlogCard = ({ showHeader = true, limit }) => {
  const articles = [
    {
      id: 1,
      author: "Joseph",
      date: "December 3, 2024",
      title: "Research Breakthrough in Heart Disease Treatment",
      image: asset49,
    },
    {
      id: 2,
      author: "Joseph",
      date: "December 1, 2024",
      title: "Advanced Medical Solutions for Every Patient's Needs",
      image: asset50,
    },
    {
      id: 3,
      author: "Joseph",
      date: "November 30, 2024",
      title: "Your Trusted Partner in Comprehensive Medical Care",
      image: asset51,
    },
    {
      id: 4,
      author: "Joseph",
      date: "November 29, 2024",
      title: "10 Tips for Maintaining a Bright, Healthy Smile",
      image: post1,
    },
    {
      id: 5,
      author: "Joseph",
      date: "November 26, 2024",
      title: "Teeth Whitening 101: Myths and Facts Revealed",
      image: post2,
    },
    {
      id: 6,
      author: "Joseph",
      date: "November 20, 2024",
      title: "Smile Confidently: Expert Advice for Dental Health",
      image: post3,
    },
  ];

  const displayArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section className="bg-white py-24 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Header (Optional) */}
        {showHeader && (
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-[#536de6] font-semibold">
              <FaStethoscope size={20} />
              <span>Latest News</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-[#0a0e27] md:text-5xl lg:text-6xl">
              Health updates you need to <br /> know
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500 leading-relaxed">
              Get the latest information on health topics, wellness tips, and
              advancements in patient care.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {displayArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-[2.5rem]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                <span>By {article.author}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                <span>{article.date}</span>
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight text-[#0a0e27] transition-colors group-hover:text-[#536de6]">
                {article.title}
              </h3>

              <button className="flex items-center gap-2 font-semibold text-[#536de6]">
                Read More
                <FaArrowRightLong
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
