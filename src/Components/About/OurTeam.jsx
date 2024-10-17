import React from "react";
import { Leads } from "../../data/aboutData";

const OurTeam = () => {
  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Meet Our Leads
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4">
          {Leads.map((item, index) => (
            <div className="bg-white rounded-lg shadow-md p-6 my-2 text-center" key={index}>
              <img
                src={item.img}
                alt="Team Member 8"
                className="w-full rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
