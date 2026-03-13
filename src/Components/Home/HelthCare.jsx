import React, { useState } from 'react';
import call from '../../assets/call.svg'
import { FaAngleDown } from "react-icons/fa";
import { FaStethoscope, FaClock, FaUserGroup } from "react-icons/fa6";



const faqs = [
  { q: "What should I bring to my first appointment?", a: "Please bring your ID, insurance card, and any relevant medical records." },
  { q: "How do I schedule an appointment?", a: "You can schedule via our website button or by calling our office directly." },
  { q: "What insurance plan do you accept?", a: "We accept most major providers including Aetna, Blue Cross, and United." },
  { q: "Can I get a prescription refill without an appointment?", a: "Refills usually require a brief check-up, but please call us to verify." },
  { q: "What should I expect during my first visit?", a: "Expect a comprehensive evaluation and a discussion about your health goals." },
  { q: "How are treatment plans customized for individual needs?", a: "We use diagnostic data and personal history to create a tailored plan for you." },
];
const HelthCare = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#e8ebff] max-w-7xl mx-auto rounded-3xl py-10  md:py-24 px-3 md:px-6 lg:px-12">
      <div className=" flex flex-col justify-between  lg:flex-row gap-16">

        <div className="w-full lg:w-6/12 space-y-8">
          <div className="flex items-center space-x-2 text-[#5a67d8]">
            <FaStethoscope size={20} />
            <span className="font-semibold text-sm uppercase ">Frequently Asked Questions</span>
          </div>

          <h2 className=" text-2xl md:text-4xl  max-w-xl font-bold text-[#1a202c] leading-tight">
            Helping you understand healthcare
          </h2>

          <p className="text-gray-500 md:text-lg max-w-4xl">
            Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.
          </p>
          <div className="bg-white p-4 md:p-8 rounded-[40px] shadow-sm flex items-center space-x-6 border border-gray-50 max-w-sm">
            <div className=" me-5 mb-auto">
              <img src={call} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
              <p className="text-gray-400 text-sm font-medium">We always take care of your smile</p>
              <h4 className="text-xl font-bold text-[#1a202c]">24/7 Emergency</h4>
              <p className="text-gray-400 text-lg mt-1">659-888-589</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/15">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 first:pt-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left hover:text-[#5a67d8] transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 pr-4">{faq.q}</span>
                  <FaAngleDown
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#5a67d8]' : 'text-gray-400'}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-gray-500 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default HelthCare
