import React from "react";
import { clients,softwares } from "../../data/aboutData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Clients = () => {
  return (
    <>
      {/* First Splide section scrolling from left to right */}
      <Splide
        options={{
          type: "loop",
          drag: "free",
          pagination: false,
          focus: "center",
          arrows: false,
          perPage: 7,
          autoScroll: {
            speed: -1, // Left to right
          },
          breakpoints: {
            1024: {
              perPage: 5,
            },
            768: {
              perPage: 3,
            },
            640: {
              perPage: 2,
            },
            480: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Scrolling Left to Right"
      >
        {softwares.map((item, index) => (
          <SplideSlide key={index}>
            <div>
              <img
                src={item}
                alt={`Client ${index + 1}`}
                className="w-full h-full aspect-video"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Second Splide section scrolling from right to left */}
      <Splide
        options={{
          type: "loop",
          drag: "free",
          pagination: false,
          focus: "center",
          arrows: false,
          perPage: 7,
          autoScroll: {
            speed: 1, // Right to left
          },
          breakpoints: {
            1024: {
              perPage: 5,
            },
            768: {
              perPage: 3,
            },
            640: {
              perPage: 2,
            },
            480: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Scrolling Right to Left"
      >
        {clients.map((item, index) => (
          <SplideSlide key={index}>
            <div>
              <img
                src={item}
                alt={`Client ${index + 1}`}
                className="w-full h-full aspect-video"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Clients;
