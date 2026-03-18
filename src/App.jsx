import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Faq from "./Pages/Faq";
import Doctor from "./Pages/Doctor";
import DoctorDetails from "./Pages/DoctorDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BookAppointment from "./Pages/BookAppointment";
import Error404 from "./Pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="doctor-details/:id" element={<DoctorDetails />} />
          <Route path="doctor-details" element={<DoctorDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
