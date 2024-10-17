import React from "react";
import PrimaryBtn from "../common/buttons/PrimaryBtn";
import BannerSlide from "../common/BannerSlide";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-20 max-md:p-10 max-sm:p-5 banner-bg">
      <div className="md:w-1/2 text-center md:text-left card-1 p-5">
        <h4 className="dark-texts font-semibold mb-2">MECHCI CADD</h4>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
          Design Driven Engineering Solutions
        </h1>
        <p className="text-[var(--muted-foreground)] text-justify text-lg mb-6 pr-2">
          We transform businesses in most major sectors with powerful and
          adaptable technology solutions that satisfy the needs of today and
          tomorrow.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to={"/engineering-design"}>
            {" "}
            <PrimaryBtn text="Engineering Design" />
          </Link>
        </div>
      </div>
      <BannerSlide />
    </div>
  );
};

export default Banner;
