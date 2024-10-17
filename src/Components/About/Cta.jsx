import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="relative flex items-center justify-center text-white bg-gradient-to-r from-purple-600 to-teal-500">
      {/* Waves Container */}
      <div className="absolute inset-0">
        <div className="waves h-full">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      {/* CTA Content */}
      <div className="relative p-8 bg-gray-900 bg-opacity-50 text-white text-center w-full max-w-full">
        <h1 className="text-4xl font-bold mb-4">Call to Action (CTA)</h1>
        <p className="text-lg mb-8">
          Jadilah bagian dari komunitas kami dan nikmati manfaat eksklusif.
        </p>
        <div className="flex gap-x-8 justify-center">
          <Link
            to="https://github.com/idugeni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral btn-wide border border-white px-5 py-2 relative overflow-hidden transition-all duration-300 ease-in-out group"
          >
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
              WhatsApp
            </span>
            <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100"></span>
          </Link>
          <Link
            to="https://github.com/idugeni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral btn-wide border border-white px-5 py-2 relative overflow-hidden transition-all duration-300 ease-in-out group"
          >
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
              Call
            </span>
            <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100"></span>
          </Link>
        </div>
      </div>


    </div>
  );
};

export default Cta;