import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Breadcrum = ({location}) => {
    
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="ml-1 inline-flex text-md font-medium text-white hover:underline md:ml-2 items-center"
          >
            <FaHome className="mr-2"/>
            Home
          </Link>
        </li>
        
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2.5 text-white text-md">/</span>
            <span className="ml-1 text-md font-medium text-white md:ml-2">
             {location}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrum;
