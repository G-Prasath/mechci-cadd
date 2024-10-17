import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import CountUp from "react-countup";
import { slides } from "../../data/homeData";
import { Link } from "react-router-dom";
const About = () => {
  const [facts, setFacts] = useState([
    { label: "Years of Experience", count: 0, end: 30 },
    { label: "Projects completed", count: 0, end: 1100 },
    { label: "Awards achieved", count: 0, end: 240 },
    { label: "Satisfied clients in 24 countries", count: 0, end: 180 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFacts((prevFacts) =>
        prevFacts.map((fact) => ({
          ...fact,
          count: fact.count < fact.end ? fact.count + 1 : fact.count,
        }))
      );
    }, 1000); // Update interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-black to-blue-700 p-20 max-md:p-0 max-lg:p-10 ">
        <div className="text-white p-8 m-10 max-md:m-5 rounded-lg">
          <div className="relative overflow-hidden w-full">
            <Splide
              options={{
                type: "loop",
                rewind: true,
                width: "100%",
                gap: "1rem",
                pagination: false,
                autoplay: true,
                perPage: 8,
                arrows: false,
                interval: 3000,
                easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                breakpoints: {
                  1024: {
                    perPage: 4, // Number of slides to show on tablet screens
                  },
                  640: {
                    perPage: 2, // Number of slides to show on mobile screens
                  },
                },
              }}
            >
              {slides.map((slide, index) => (
                <SplideSlide key={index}>
                  <img
                    src={slide.imageUrl}
                    alt={slide.alt}
                    className="bg-white h-15 mx-4 rounded-md"
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <blockquote className="text-2xl lg:text-3xl font-semibold mb-4">
                <cite className="block text-2xl">
                  “Design is not just what it looks like and feels like. Design
                  is how it works”
                </cite>
              </blockquote>
              <cite className="block text-lg font-light italic">
                Steve Jobs
              </cite>
            </div>
            <div className="w-full lg:w-1/2 text-justify lg:text-left mt-8 lg:mt-0">
              <p className="mb-4">
                MEPL is a reputable business that has been operating out of
                Chennai, India, since 1995. Our goal is to provide our clients
                with the best possible service by delivering high-quality work
                within budget constraints and a lean manpower schedule. We do
                this by assembling a highly skilled team of professionals who
                can handle projects in a variety of sectors, including the oil
                and gas, fertilizer, chemical, and petrochemical industries.
              </p>
              <p className="mb-4">
                MEPL is an engineering consultant with many disciplines that
                offers design engineering and project management services to the
                building, petrochemical, and oil and gas sectors. To complete
                EPIC projects, MEPL has a great deal of experience working as an
                alliance partner or contractor with both domestic and foreign
                contractors.
              </p>
              <p className="mb-4">
                MEPL employs professional engineers, designers, and technical
                assistance staff. Depending on the workload, several staffing
                levels exist.
              </p>
              <p className="mb-4">
                Thanks to our resources, we can offer a full range of
                engineering services for projects of any scale, from conceptual
                design and feasibility studies to planning, budget preparation,
                detailed design and drafting, construction management, and
                commissioning.
              </p>

              <Link
                to={"/about"}
                  rel="noopener noreferrer"
                className="btn btn-neutral btn-wide border border-white px-5 py-2 relative overflow-hidden transition-all duration-300 ease-in-out group"
              >
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                  More About Us
                </span>
                <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100"></span>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-around mt-10 pt-10 text-center">
            {facts.map((fact, index) => (
              <div key={index} className="w-1/2 md:w-1/4 mb-4">
                <CountUp
                  end={fact.end}
                  duration={5}
                  className="text-2xl font-bold"
                />
                <p>{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
