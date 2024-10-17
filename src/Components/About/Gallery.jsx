import React, { useState } from "react";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { src: "/team/mechcicadd-01.avif", span: "md:h-80" },
    { src: "/team/mechcicadd-02.avif", span: "md:col-span-2 md:h-80" },
    { src: "/team/mechcicadd-03.avif", span: "md:col-span-2 md:h-80" },
    { src: "/team/mechcicadd-04.jpg", span: "md:h-80" },
    { src: "/team/mechcicadd-05.jpg", span: "md:h-80" },
    { src: "/team/mechcicadd-06.jpg", span: "md:col-span-2 md:h-80" },
    { src: "/team/mechcicadd-07.jpg", span: "md:col-span-2 md:h-80" },
    { src: "/team/mechcicadd-08.jpg", span: "md:h-80" },
    { src: "/team/mechcicadd-09.avif", span: "md:h-80" },
    { src: "/team/mechcicadd-10.avif", span: "md:col-span-2 md:h-80" },
    { src: "/team/mechcicadd-11.avif", span: "md:col-span-2 md:h-80" },

  ];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12 w-full">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white text-center w-full">
              Our Team
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 max-md:grid-cols-1 xl:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${image.span}`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                loading="lazy"
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl mt-15"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={images[selectedImageIndex].src}
              alt="Selected"
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full"
              onClick={showPreviousImage}
            >
              &#8249;   
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full"
              onClick={showNextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;