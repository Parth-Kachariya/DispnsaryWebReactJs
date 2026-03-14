import PageHeader from "../Components/PageHeader";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  MessageCircleQuestion,
} from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-100 py-6">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left group"
    >
      <span
        className={`text-lg font-bold transition-colors ${isOpen ? "text-indigo-600" : "text-slate-900 group-hover:text-indigo-600"}`}
      >
        {question}
      </span>
      {isOpen ? (
        <ChevronUp className="text-indigo-600" />
      ) : (
        <ChevronDown className="text-slate-400" />
      )}
    </button>
    {isOpen && (
      <div className="mt-4 text-slate-500 leading-relaxed animate-fadeIn">
        {answer}
      </div>
    )}
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    { id: "general", label: "General Information" },
    { id: "treatment", label: "Treatment Plans" },
    { id: "medication", label: "Medication & Prescriptions" },
    { id: "facility", label: "Facility And Services" },
  ];

  const faqs = [
    {
      section: "General Information",
      items: [
        {
          q: "What are the clinic's operating hours?",
          a: "Our clinic is open Monday to Saturday from 8:00 AM to 8:00 PM, and on Sundays from 9:00 AM to 2:00 PM.",
        },
        {
          q: "Do I need to book an appointment in advance?",
          a: "While we accept walk-ins for emergencies, we highly recommend booking in advance to ensure minimal wait times.",
        },
        {
          q: "Is parking available at the facility?",
          a: "Yes, we provide free basement parking for all our patients and visitors.",
        },
        {
          q: "Does the clinic accept health insurance?",
          a: "We partner with most major insurance providers. Please bring your card for verification.",
        },
      ],
    },
    {
      section: "Treatment Plans",
      items: [
        {
          q: "What should I expect during my first visit?",
          a: "Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.",
        },
        {
          q: "How are treatment plans customized for individual needs?",
          a: "Our specialists conduct thorough evaluations to create a plan tailored specifically to your medical history.",
        },
        {
          q: "Can I change my treatment plan mid-way?",
          a: "Absolutely. We review progress regularly and adjust the plan based on your body's response.",
        },
        {
          q: "Are the treatment costs fixed?",
          a: "Costs vary depending on the complexity, but we provide a detailed estimate before starting.",
        },
      ],
    },
    {
      section: "Medication & Prescriptions",
      items: [
        {
          q: "Can I refill my prescription online?",
          a: "Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.",
        },
        {
          q: "Does the dispensary provide generic medication options?",
          a: "Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.",
        },
        {
          q: "What should I do if I miss a dose of my medication?",
          a: "Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.",
        },
        {
          q: "Do I need a prescription to buy over-the-counter medications?",
          a: "Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.",
        },
      ],
    },
    {
      section: "Facility and Services",
      items: [
        {
          q: "What services does the dispensary offer?",
          a: "We provide a wide range of healthcare services, including consultations, medication dispensing, health screenings, and vaccination services.",
        },
        {
          q: "Are walk-in appointments accepted, or do I need to book in advance?",
          a: "We provide a wide range of healthcare services, including consultations, medication dispensing, health screenings, and vaccination services.",
        },
        {
          q: "Does the dispensary have a licensed pharmacist on-site?",
          a: "We provide a wide range of healthcare services, including consultations, medication dispensing, health screenings, and vaccination services.",
        },
        {
          q: "What payment options are available at the dispensary?",
          a: "We provide a wide range of healthcare services, including consultations, medication dispensing, health screenings, and vaccination services.",
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-3 py-16">
      <PageHeader title="Frequently asked question" Link="Home" badge="FAQs" />
      <div className=" flex flex-col md:flex-row gap-12 bg-white min-h-screen mt-10">
        <div className="w-full md:w-1/3 space-y-8">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
            <ul className="space-y-4">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button className="w-full flex justify-between items-center group text-slate-500 hover:text-indigo-600 transition-colors py-2">
                    <span className="font-semibold">{sec.label}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-600/80 rounded-[2.5rem] p-10 text-white text-center relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4">
                <MessageCircleQuestion size={48} strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-bold mb-4">Need Help ?</h2>
              <p className="text-indigo-100 mb-8 leading-relaxed">
                Schedule your initial consultation today and start your journey
                towards a pain-free, healthier smile. Contact us now!
              </p>

              <button className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-slate-50 transition-colors">
                <NavLink to="/contact">Contact Us</NavLink>
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          </div>
        </div>

        <div className="w-full md:w-2/3 max-h-[90vh] overflow-y-auto pr-6 custom-scrollbar">
          {faqs.map((group, gIndex) => (
            <div key={gIndex} className="mb-16">
              <h2 className=" text-2xl md:text-5xl font-bold text-slate-900 md:mb-10 leading-tight">
                {group.section}
              </h2>
              <div className="space-y-2">
                {group.items.map((item, iIndex) => {
                  const globalIndex = `${gIndex}-${iIndex}`;
                  return (
                    <FAQItem
                      key={globalIndex}
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === globalIndex}
                      onClick={() =>
                        setOpenIndex(
                          openIndex === globalIndex ? null : globalIndex,
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
