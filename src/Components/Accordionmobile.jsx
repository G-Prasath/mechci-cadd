import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const AccordionMobile = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <ul className="block lg:hidden list-none p-0 m-0">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <input
            type="checkbox"
            id={item.id}
            className="hidden"
            checked={activeItem === item.id}
            onChange={() => handleToggle(item.id)}
          />
          <label
            htmlFor={item.id}
            className={`block p-4 border rounded cursor-pointer transition duration-150 ease-in-out ${
              activeItem === item.id ? "bg-white shadow-lg" : "bg-gray-200"
            } ${item.background}`}
          >
            <div className="flex justify-center items-center">
              <h2
                className={`text-center text-lg transition-transform duration-300 ease-in-out ${
                  activeItem === item.id
                    ? "text-gray-700 text-3xl"
                    : "text-gray-700 text-xl"
                }`}
              >
                {item.title}
              </h2>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                  activeItem === item.id ? "rotate-180" : "rotate-0"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
              </svg>
            </div>
          </label>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeItem === item.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="p-0">
              {item.images.map((image, index) => (
                <li key={index} className="relative w-full h-[500px]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="block w-full h-full object-cover bg-gray-300"
                  />
                  {image.content && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 text-white p-4 text-center">
                      <div className="mb-4 vertical-card p-3">
                        <h2 className="text-3xl">{image.title}</h2>
                        <p className="text-sm mt-10">{image.content}</p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccordionMobile;