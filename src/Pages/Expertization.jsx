import React from "react";
import Accordion from "../Components/Accoridon";
import AccordionMobile from "../Components/Accordionmobile";
import { expertizationSections,expertizationMobile } from "../data/productData";
import Products from "../Components/Product/Products";
import { hrService } from "../data/productData";
import Cta from "../Components/About/Cta";
import Clients from "../Components/About/Clients";
const Expertization = () => {
  return (
    <div>
      <Accordion sections={expertizationSections} />
      <AccordionMobile items={expertizationMobile}/>
      <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold  p-4">
        <h2 className=" font-bold text-center text-6xl">Expertization</h2>
      </div>
      <Products data={hrService} />
      <Cta />
      <Clients />
    </div>
  );
};

export default Expertization;
