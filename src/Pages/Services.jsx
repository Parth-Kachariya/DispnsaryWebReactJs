import React from "react";
import Backimg from "../assets/Backimg.svg";
import HealthCard from "../Components/Services/HealthCard";
import Card from "../Components/Services/Card";
import { servicesData } from "../Components/Services/Card";
import Testimonials from "../Components/Home/Testimonials";
import PageHeader from "../Components/PageHeader";
const Services = () => {
  return (
    <section className=" max-w-7xl mx-auto  text-center">
      <PageHeader title="Services" Link="Home" badge="Services" />

      <section className="py-20 flex flex-wrap gap-10 justify-center">
        {servicesData.map((service) => {
          return (
            <Card
              key={service.id}
              icon={service.icon}
              heading={service.heading}
              description={service.description}
              arrow={service.arrow}
              image={service.image}
            />
          );
        })}
      </section>
      <HealthCard />
      <section
        style={{ backgroundImage: `url(${Backimg})` }}
        className="pt-20 "
      >
        <Testimonials />
      </section>
    </section>
  );
};

export default Services;
