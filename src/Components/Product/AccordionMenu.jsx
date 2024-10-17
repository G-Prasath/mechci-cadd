import React, { useState } from "react";
import Accordion from "../Accoridon";
import Accordionmobile from "../Accordionmobile";
import Products from "./Products";
import { widgetData1,widgetData2,widgetData3 } from "../../data/productData";
import { engineeringSections } from "../../data/productData";
import { topicItems } from "../../data/productData";
const sections = [
  {
    title: "Area of Services",
    content: <Products data={widgetData1} />,
  },
  {
    title: "Area of Business",
    content: <Products data={widgetData2} />,
  },
  {
    title: "Inhouse expertise teams",
    content: <Products data={widgetData3} />,
  },
];

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordionMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Accordion sections={engineeringSections} />
      <Accordionmobile items={topicItems}/>

      <div className="accordion">
        <dl className="border border-gray-300">
          {sections.map((section, index) => (
            <div key={index}>
              <dt>
                <button
                  className={`accordion-title flex w-full text-center items-center p-4 bg-gradient-to-r from-purple-600 to-teal-500 border-b-2 text-white font-bold text-6xl max-sm:text-3xl max-md:text-5xl transition-colors duration-300 ${
                    activeIndex === index
                      ? "is-expanded bg-gradient-to-r from-purple-900 to-teal-900"
                      : "is-collapsed"
                  }`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion${index}`}
                  onClick={() => toggleAccordionMenu(index)}
                >
                  <span className="flex-grow text-center">{section.title}</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className={`h-10 w-10 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </button>
              </dt>
              <dd
                className={`accordion-content transition-max-height duration-500 overflow-hidden ${
                  activeIndex === index
                    ? "is-expanded max-h-auto"
                    : "is-collapsed max-h-0"
                }`}
                id={`accordion${index}`}
                aria-hidden={activeIndex !== index}
              >
                <div className="p-4 bg-gray-100">{section.content}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default AccordionMenu;