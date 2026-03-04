import React, { useRef } from "react";
import { FaStethoscope, FaStar } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import asset46 from "../../assets/images/asset46.jpeg";
import asset47 from "../../assets/images/asset47.jpeg";
import asset48 from "../../assets/images/asset48.jpeg";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: "Monika Roy",
      role: "Senior Dentist",
      image: asset46,
      text: "My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.",
    },
    {
      name: "Monika Roy",
      role: "Dental Hygienist",
      image: asset47,
      text: "My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.",
    },
    {
      name: "Brooklyn Simmons",
      role: "Orthodontics",
      image: asset48,
      text: "My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.",
    },
    {
      name: "Brooklyn Simmons",
      role: "Orthodontics",
      image: asset47,
      text: "My first appointment, but the staff was so welcoming. They took the time to listen to my concerns and made sure I felt comfortable.",
    },
  ];

  // Scroll one card width
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector(".testimonial-card");
      const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
      container.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-6 py-20 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-[#536de6] font-semibold">
            <FaStethoscope size={20} />
            <span>Testimonials</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-[#0a0e27] md:text-5xl lg:text-6xl">
            Patient stories of care and <br /> recovery
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Discover inspiring stories of recovery and healing from those we've had the privilege to serve.
          </p>
        </div>

        {/* Scrollable container */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="testimonial-card snap-start flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">{item.text}</p>
              <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#0a0e27]">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#536de6] text-white transition-colors hover:bg-[#435bc7]"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#536de6] text-white transition-colors hover:bg-[#435bc7]"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;