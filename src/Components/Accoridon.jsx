import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className="hidden lg:flex min-h-screen max-h-screen m-0 p-0 overflow-hidden list-none element-left">
      {sections.map((section, index) => (
        <li
          key={index}
          className={`flex-1 horizontalcards flex flex-col items-stretch p-5 bg-red-600 cursor-pointer transition-all duration-500 ease-in-out ${
            activeIndex === index ? "flex-[5] bg-white cursor-default" : ""
          }`}
          onClick={() => setActiveIndex(index)}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${section.backgroundImage}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-1 flex items-start justify-center text-white text-center">
            <h2
              className={`m-0 vertical-card p-5 transform ${
                activeIndex === index
                  ? "text-white text-xl rotate-0"
                  : "rotate-[-90deg] text-xl mt-10"
              }`}
              dangerouslySetInnerHTML={{ __html: section.title }}
            ></h2>
          </div>
          <div
            className={`flex-1 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? "opacity-100 transform scale-x-100"
                : "opacity-0 transform scale-x-0"
            }`}
          >
            <p className="m-0 text-white mb-4 text-justify text-xl vertical-card p-5">
              {section.content}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;