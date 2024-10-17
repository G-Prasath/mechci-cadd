import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { slidesData } from "../../data/homeData";

const Portfolio = () => {
  return (
    <div className="bg-image-via py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm text-blue-500 text-[var(--primary)] font-semibold">
            PORTFOLIO
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Latest Projects <span className="font-light">From Our Team</span>
          </h1>
        </div>
        <Splide
          options={{
            type: "loop",
            rewind: true,
            width: "100%",
            gap: "1rem",
            pagination: false,
            autoplay: true,
            perPage: 3,
            arrows: false,
            interval: 3000,
            breakpoints: {
              1024: {
                perPage: 1,
            // Number of slides to show on tablet screens
              },
              640: {
                perPage: 1, // Number of slides to show on mobile screens
              },
            },
          }}
          className="relative"
        >
          {slidesData.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-lg p-4">
                <img
                  className="rounded-t-lg w-full"
                  src={slide.imgSrc}
                  alt={slide.title}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{slide.title}</h3>
                  <p className="text-[var(--secondary)]">{slide.type}</p>
                  <p className="mt-2 text-[var(--muted-foreground)]">
                    {slide.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {slide.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[var(--secondary)] text-[var(--secondary-foreground)] px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Portfolio;
