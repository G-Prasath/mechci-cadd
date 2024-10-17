import React from "react";
import ImageGrid from "./ImageGrid";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-[8%] bg-white dark:bg-zinc-900">
      {/* ImageGrid Component */}
      <div className="w-full md:w-1/2 p-[5%]  ">
        <ImageGrid />
      </div>

      {/* Why Choose Us Text */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-12">
        <h3 className="text-blue-500 dark:text-blue-400 uppercase text-sm font-semibold">
          Why Choose Us
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 mt-2">
          Boost Your Business
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          With Team Mechci
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 mt-4">
          Our team can assist you in transforming your business through latest
          Design capabilities to stay ahead of the curve.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-200 rounded-full mr-2"></span>{" "}
            Comprehensive end-to-end engineering Solutions
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-200 rounded-full mr-2"></span>{" "}
            Extensive expertise in plant engineering
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-200 rounded-full mr-2"></span>{" "}
            Cutting Edge Technology in CAD/CAE
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-200 rounded-full mr-2"></span>{" "}
            Rigorous Quality and safety Assurance
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-200 rounded-full mr-2"></span>{" "}
            Cost effective, On-time delivery,
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-200 rounded-full mr-2"></span>{" "}
            Adherence to Global Standards
          </li>
        </ul>

      </div>
    </div>
  );
};

export default WhyChoose;
