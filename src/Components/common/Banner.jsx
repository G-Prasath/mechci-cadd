import React from "react";
import Breadcrum from "./Breadcrum";
import { useLocation } from "react-router-dom";

const Banner = ({ bannerImg, bannerCnt }) => {
  const location = useLocation();

  // Remove leading slash from pathname
  const cleanPathname = location.pathname.startsWith("/")
    ? location.pathname.substring(1)
    : location.pathname;

  const toTitleCase = (str) => {
    return str
      .split("/")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  return (
    <div className="relative w-full aspect-video element-scroll">
      <img
        src={bannerImg}
        alt="Background Image"
        className="object-cover object-center w-full aspect-video"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 w-full aspect-video"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center w-full aspect-video sm:gap-y-8 gap-y-3">
        <h1 className="text-4xl text-white font-bold">{bannerCnt}</h1>
        <Breadcrum location={toTitleCase(cleanPathname)} />
      </div>
    </div>
  );
};

export default Banner;
