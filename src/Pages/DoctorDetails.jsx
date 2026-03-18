import { FaCheckCircle, FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import PageHeader from "../Components/PageHeader";
// import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import member1 from "../assets/images/member1.jpeg";
import member2 from "../assets/images/member2.jpeg";
import member3 from "../assets/images/member3.jpeg";
import member4 from "../assets/images/member4.jpeg";
import member5 from "../assets/images/member5.jpg";
import member6 from "../assets/images/member6.jpg";
import member7 from "../assets/images/member7.jpg";
import member8 from "../assets/images/member8.jpg";

const doctorData = [
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
  { id: 4, name: "Dr. Arlene Mccoy", specialty: "Cardiology", image: member4 },
  {
    id: 5,
    name: "Dr. Michael Jhonson",
    specialty: "Orthopedics",
    image: member5,
  },
  { id: 6, name: "Dr. Sarah Lee", specialty: "Pediatrics", image: member6 },
  { id: 7, name: "Dr. James Smith", specialty: "Neurology", image: member7 },
  { id: 8, name: "Dr. Rachel Davis", specialty: "Dermatology", image: member8 },
];
const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctorData.find((doc) => doc.id === Number(id));
  if (!doctor) {
    return (
      <h1 className="text-center my-3 md:my-10 text-red-500 text-xl md:text-4xl font-bold">
        Doctor Not Found
      </h1>
    );
  }
  return (
    <section className="max-w-7xl mx-auto px-3">
      <PageHeader title={doctor.name} Link="Home" badge={doctor.name} />
      <div className="flex flex-col md:flex-row md:h-screen my-8  overflow-hidden ">
        <div className="w-full md:w-[400px] bg-[#f3f3ff] h-full rounded-[3rem] flex flex-col z-10 overflow-hidden">
          <div className="rounded-[2.5rem] overflow-hidden flex-1">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[500px]  object-cover"
            />
          </div>

          <div className="space-y-4 px-7 md:px-14 py-4">
            {[
              { label: "Name:", value: doctor.name },
              { label: "Position:", value: doctor.specialty },
              { label: "Phone:", value: "+91- 123 456 7890" },
              { label: "E-Mail:", value: "info@domain.com" },
              { label: "Experience:", value: "16 years" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-gray-300 pb-3"
              >
                <span className="font-bold text-slate-900 text-lg">
                  {item.label}
                </span>
                <span className="text-slate-500">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0b1030] rounded-b-4xl  py-4 px-8 flex items-center justify-between text-white mt-auto ">
            <span className="font-bold">Follow Us:</span>
            <div className="flex gap-3">
              <div className="p-2 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer">
                <FaXTwitter size={16} />
              </div>
              <div className="p-2 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer">
                <FaLinkedinIn size={16} />
              </div>
              <div className="p-2 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer">
                <FaPinterestP size={16} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto  py-8 md:p-16 bg-white custom-scrollbar">
          <section className="mb-16">
            <h1 className=" text-3xl md:text-5xl font-bold text-[#0F172A] mb-3 md:mb-8">
              Personal biography
            </h1>
            <p className="text-slate-500 leading-relaxed text-lg max-w-5xl">
              {doctor.name} is a highly experienced {doctor.specialty} with over
              12 years of expertise in diagnosing and treating a wide range of
              eye conditions. She specializes in advanced procedures like
              cataract surgery, LASIK, and the management of glaucoma and
              retinal disorders. With a deep commitment to patient care, Dr.
              Carter ensures personalized treatment plans tailored to each
              individual's needs.
            </p>
          </section>
          <section className="grid md:grid-cols-2 gap-13 mb-16">
            <div className="space-y-8">
              <h2 className=" text-3xl md:text-5xl font-bold text-slate-900">
                My experience
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Graduate Intern – 2013 – 2020
                  </h4>
                  <p className="text-slate-500 mt-2">
                    At Institution Name focused on family counseling and
                    conflict resolution techniques.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Licensed Psychologist – 2020 – Present
                  </h4>
                  <p className="text-slate-500 mt-2">
                    At Institution Name focused on family counseling and
                    conflict resolution techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className=" text-3xl md:text-5xl font-bold text-slate-900">
                My skills
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Psychologist", val: "56%" },
                  { label: "Success Case", val: "89%" },
                  { label: "Therapy Specialist", val: "85%" },
                ].map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between font-bold text-slate-700">
                      <span>{skill.label}</span>
                      <span>{skill.val}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: skill.val }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-8">
              My expertise area & feature
            </h2>
            <p className="text-slate-500 mb-8 text-lg">
              Esther specializes in cognitive-behavioral therapy (CBT), trauma
              recovery, and mindfulness techniques, offering tailored support
              for individuals dealing with anxiety, depression, and life
              transitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Experienced Professionals",
                "Client-Centered Approach",
                "Safe And Confidential Environment",
                "Commitment To Growth",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <FaCheckCircle className="text-indigo-600" size={20} />
                  {feature}
                </div>
              ))}
            </div>
          </section>
          <section className="bg-[#f3f3ff] rounded-3xl md:rounded-[3rem] p-3 md:p-16  md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-10 flex items-center gap-4">
              Get in touch with me
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full bg-white rounded-2xl py-5 px-8 outline-none shadow-sm focus:ring-2 focus:ring-indigo-100"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-white rounded-2xl py-5 px-8 outline-none shadow-sm focus:ring-2 focus:ring-indigo-100"
                />
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className="w-full bg-white rounded-2xl py-5 px-8 outline-none shadow-sm focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <textarea
                placeholder="Write Message.."
                rows="5"
                className="w-full bg-white rounded-2xl py-5 px-8 outline-none shadow-sm focus:ring-2 focus:ring-indigo-100 resize-none"
              ></textarea>
              <button className="bg-indigo-500 text-white font-bold px-4 py-3 md:py-5 md:px-12 rounded-full hover:bg-indigo-600 cursor-pointer transition-all shadow-lg shadow-indigo-200">
                Submit Now
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
