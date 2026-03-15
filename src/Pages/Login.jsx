import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import { NavLink } from "react-router-dom";
import Loginimg from "../assets/images/Loginimg.avif";
import { MdMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login successful", form);
      // TODO: Add login logic
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-3">
      <PageHeader title="Login Page" Link="Home" badge="Login" />
      <div className=" flex items-center justify-center p-3 md:p-6 ">
        <div className="bg-[#f3f3ff] w-full max-w-5xl rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row md:min-h-[600px]">
          <div className="hidden md:block md:w-1/2 relative bg-indigo-600">
            <img
              src={Loginimg}
              alt="Medical Professional"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-indigo-100 text-lg leading-relaxed">
                Access your personalized medical dashboard and stay connected
                with your healthcare providers.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-16 flex flex-col justify-center">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Login</h1>
              <p className="text-slate-500">
                Please enter your details to sign in.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <MdMailOutline
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                  size={20}
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className={`w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-indigo-900 focus:ring-2 focus:ring-indigo-500 transition-all outline-none ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="relative group">
                <CiLock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                  size={20}
                />
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className={`w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all outline-none ${
                    errors.password ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 md:py-4 rounded-full shadow-lg shadow-indigo-100 transition-all transform active:scale-[0.98]">
                Sign In
              </button>
            </form>

            <p className="mt-8 text-center text-slate-500 text-sm">
              Don't have an account?{" "}
              <button className="text-indigo-600 font-bold hover:underline">
                <NavLink to="/register">Create an account</NavLink>
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
