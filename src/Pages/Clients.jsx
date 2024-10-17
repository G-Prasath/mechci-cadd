import React, { useState } from "react";
// import { imageData } from "../data/productData";
import Cta from "../Components/About/Cta";

export default function Clients() {
  const [activeTab, setActiveTab] = useState("plant");

  return (
    <>
    {/* <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">simpletabs</h1>
      <div className="flex flex-wrap justify-center border-b border-zinc-300">
        <button
          className={`tab-button px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "plant" ? "border-b-2 font-bold border-black" : ""
          }`}
          onClick={() => setActiveTab("plant")}
        >
          Plant Engineering Clients
        </button>
        <button
          className={`tab-button px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "cad" ? "border-b-2 font-bold border-black" : ""
          }`}
          onClick={() => setActiveTab("cad")}
        >
          CAD/CAM, Automotive Clients
        </button>
        <button
          className={`tab-button px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "it" ? "border-b-2 font-bold border-black" : ""
          }`}
          onClick={() => setActiveTab("it")}
        >
          IT, ITES & BPO Clients
        </button>
        <button
          className={`tab-button px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "cini" ? "border-b-2 font-bold border-black" : ""
          }`}
          onClick={() => setActiveTab("cini")}
        >
          Cinemas & Media Clients
        </button>
        <button
          className={`tab-button px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "fin" ? "border-b-2 font-bold border-black" : ""
          }`}
          onClick={() => setActiveTab("fin")}
        >
          Finance & Insurance Clients
        </button>
        <button
          className={`tab-button px-2 sm:px-4 py-2 focus:outline-none ${
            activeTab === "other" ? "border-b-2 font-bold border-black" : ""
          }`}
          onClick={() => setActiveTab("other")}
        >
          Other Clients
        </button>
      </div>
      <div className="tab-content mt-4">
        {Object.keys(imageData).map((tab) => (
          <div
            id={tab}
            className={`tab-panel ${activeTab === tab ? "" : "hidden"}`}
            key={tab}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {imageData[tab].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div> */}
    
    <Cta/>
    </>
  );
}
