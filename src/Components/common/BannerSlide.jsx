import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const imageData = [
    {
      src: "/banner/design-1.png",
      alt: "Slide 1"
    },
    {
      src: "/banner/design-2.png",
      alt: "Slide 2"
    },
    {
      src: "/banner/design-3.png",
      alt: "Slide 3"
    },
    // {
    //   src: "/banner/design-4.png",
    //   alt: "Slide 4"
    // },
    // {
    //   src: "/banner/design-5.png",
    //   alt: "Slide 5"
    // },
    // {
    //   src: "/banner/design-6.png",
    //   alt: "Slide 6"
    // },
    // {
    //   src: "/banner/design-7.png",
    //   alt: "Slide 7"
    // }
  ];

const BannerSlide = () => {
  return (
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        interval: 3000,
        arrows: false,
        pagination: true,
        perPage: 1,
      }}
    >
      {imageData.map((image, index) => (
        <SplideSlide key={index}>
          <div className="relative">
            <img
              className="w-full aspect-square"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 rounded-full mix-blend-multiply"></div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </div>
  );
};

export default BannerSlide;