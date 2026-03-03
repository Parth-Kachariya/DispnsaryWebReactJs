import React from "react";
import PageHeading from "../Components/PageHeader";
import Member from "../Components/Home/Member";

const Doctor = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <PageHeading title="Our team" Link="Home" badge="Our team" />
      <Member showHeading={false} />
    </section>
  );
};

export default Doctor;
