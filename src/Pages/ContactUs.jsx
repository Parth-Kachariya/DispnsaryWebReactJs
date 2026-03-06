import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaStethoscope, FaPinterestP, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import PageHeader from "../Components/PageHeader";
const ContactInfoCard = [
  {
    icon: IoCallOutline,
    title: "Contact Details",
    detail: "+01-787-582-568",
  },
  {
    icon: IoLocationOutline,
    title: "Address",
    detail: "403, Port Washington Road, Canada",
  },
  {
    icon: MdMailOutline,
    title: "Email Us",
    detail: "info@domain.com",
  },
];
const ContactUs = () => {
  return (
    <>
      <section className="mx-w-7xl mx-auto px-3">
        <PageHeader title="Contact us" Link="Home" badge="Contact us" />

        <div>
          <div className="   p-4 md:p-10">
            <div className="mx-auto max-w-7xl rounded-[3.5rem] bg-white p-6 md:p-20 shadow-sm border border-slate-100">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="flex flex-col gap-8">
                    {ContactInfoCard.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-5 rounded-3xl bg-[#f3f4ff] p-6 transition-transform hover:scale-[1.02]"
                        >
                          <div className="flex h-14 w-14 px-4 items-center justify-center rounded-full bg-[#536de6] text-white">
                            <item.icon size={24} />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-[#0a0e27]">
                              {item.title}
                            </h4>
                            <p className="text-slate-500">{item.detail}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                    <span className="text-xl font-bold text-[#0a0e27]">
                      Follow Us:
                    </span>
                    <div className="flex gap-4 text-[#536de6]">
                      <FaFacebookF
                        className="cursor-pointer hover:opacity-80"
                        size={20}
                      />
                      <FaTwitter
                        className="cursor-pointer hover:opacity-80"
                        size={20}
                      />
                      <FaLinkedinIn
                        className="cursor-pointer hover:opacity-80"
                        size={20}
                      />
                      <FaPinterestP
                        className="cursor-pointer hover:opacity-80"
                        size={20}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="mb-4 flex  justify-left gap-2 font-semibold text-[#536de6]">
                    <FaStethoscope size={20} />
                    <span className="text-sm uppercase tracking-wider">
                      Contact Us
                    </span>
                  </div>
                  <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0a0e27] md:text-5xl lg:text-5xl">
                    Reach out for questions
                  </h2>
                  <p className="mb-10 text-slate-500 leading-relaxed">
                    We take the time to understand your individual needs and
                    goals, creating customized treatment plans to help you
                    achieve optimal oral health.
                  </p>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full rounded-2xl bg-[#f3f4ff] p-5 outline-none focus:ring-2 focus:ring-[#536de6]/20"
                    />
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full rounded-2xl bg-[#f3f4ff] p-5 outline-none focus:ring-2 focus:ring-[#536de6]/20"
                      />
                      <input
                        type="tel"
                        placeholder="Enter Your Number"
                        className="w-full rounded-2xl bg-[#f3f4ff] p-5 outline-none focus:ring-2 focus:ring-[#536de6]/20"
                      />
                    </div>
                    <textarea
                      placeholder="Write Message.."
                      rows="5"
                      className="w-full rounded-2xl bg-[#f3f4ff] p-5 outline-none focus:ring-2 focus:ring-[#536de6]/20 resize-none"
                    ></textarea>

                    <div className="flex justify-start">
                      <button className=" cursor-pointer rounded-full bg-[#536de6] px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-[#435bc7] hover:shadow-lg active:scale-95">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-16 px-4 ">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-indigo-600 mb-4">
              <FaStethoscope size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                How To Reach Us
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in touch with us
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mx-auto">
              The goal of our clinic is to deliver compassionate care and
              exceptional medical services, including general health
              consultations, specialized treatments, and preventive care. With
              trusted healthcare practices globally, we ensure your well-being
              is our priority.
            </p>
          </div>

          <div className="max-w-7xl mx-auto h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63514867.846082084!2d79.0555622536433!3d13.679648142185739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1772476106384!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
