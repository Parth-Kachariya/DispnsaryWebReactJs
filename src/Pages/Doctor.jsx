import React from "react";
import PageHeading from "../Components/PageHeader";
import Member from "../Components/Home/Member";

const Doctor = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 md:px-3 ">
      <PageHeading title="Our team" Link="Home" badge="Our team" />
      <Member showHeading={false} />
    </section>
  );
};

export default Doctor;
