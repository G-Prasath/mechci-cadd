import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide's base CSS
import { services } from "../../data/homeData";
import PrimaryBtn from "../common/buttons/PrimaryBtn";

const Services = () => {
  return (
    <div className="text-foreground py-6 bg-image1">
      <div className="max-w-7xl mx-auto p-20">
        <div className="text-center">
          <h2 className="text-base text-blue-500 font-semibold text-primary tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Perfect Engineering Solutions For Your Business
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-card-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Image Slider */}
              <Splide
                options={{
                  type: "loop",
                  rewind: true,
                  width: "100%",
                  gap: "1rem",
                  pagination: false, // Disable pagination dots
                  arrows: false, // Disable next/previous arrows
                  autoplay: true,
                  interval: 3000,
                  breakpoints: {
                    1024: {
                      perPage: 1, // Show 2 slides on tablet screens
                    },
                    640: {
                      perPage: 1, // Show 1 slide on mobile screens
                    },
                  },
                }}
                className="my-4 mx-auto"
              >
                {service.images.map((image, idx) => (
                  <SplideSlide key={idx}>
                    <img
                      src={image}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-48 aspect-square rounded-lg"
                    />
                  </SplideSlide>
                ))}
              </Splide>

              <p className="text-muted-foreground mt-4">{service.description}</p>

              <div
                onClick={() => (window.location.href = service.link)}
                className="flex flex-col md:flex-row items-center gap-4 mt-5"
              >
                <PrimaryBtn text="Visit" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;