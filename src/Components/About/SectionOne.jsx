import React from "react";

const SectionOne = () => {
  return (
    <div className="sm:flex items-center justify-center max-w-screen-xl mx-auto">
      <div className="sm:w-1/2 sm:p-10 p-5 flex justify-center">
        <div className="image text-center">
          <img src="/about-us.jpg" alt="Company" className="rounded-lg" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5 flex flex-col items-center sm:items-start">
        <div className="text text-center sm:text-left">

          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            At MECHCI CADD, we specialize in providing innovative Engineering
            solutions to the oil and gas, fertilizer, chemical, petrochemical,
            and power plant industries. With three decades of collective
            experience, our team of experts works closely with clients to create
            customized, efficient, and sustainable designs for their projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
