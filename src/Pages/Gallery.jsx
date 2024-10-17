import React from "react";

const images = [
  {
    src: "/team/mechcicadd-01.avif",
    label: "",
  },
  {
    src: "/team/mechcicadd-02.avif",
    label: "",
  },
  {
    src: "/team/mechcicadd-03.avif",
    label: "",
  },
  {
    src: "/team/mechcicadd-04.jpg",
    label: "",
  },

  {
    src: "/team/mechcicadd-05.jpg",
    label: "",
  },
  {
    src: "/team/mechcicadd-09.avif",
    label: "",
  },
  {
    src: "/team/mechcicadd-10.avif",
    label: "",
  },
  {
    src: "/team/mechcicadd-08.jpg",
    label: "",
  },
];

const ImageBox = ({ src, label }) => {
  return (
    <div className="flex-1 overflow-hidden transition-all justify-around duration-500 m-2 shadow-lg hover:flex-[1_1_50%]">
      <img
        src={src}
        alt={label}
        className="w-[200%] h-[calc(100%-10vh)]  object-cover transition-all duration-500 hover:w-full hover:h-full"
      />
      <span className="block text-[3.8vh] text-center h-[10vh] leading-[2.6]">
        {label}
      </span>
    </div>
  );
};

const ImageContainer = () => {
  return (
    <div className="flex w-full aspect-video p-4 box-border">
      {images.map((image, index) => (
        <ImageBox key={index} className="aspect-video" src={image.src} label={image.label} />
      ))}
    </div>
  );
};

export default ImageContainer;
