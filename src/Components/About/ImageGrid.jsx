import React from "react";

const ImageGrid = () => {
  const images = [
    "/logo/solid-works.png",
    "/logo/aveva-plant.png",
    "/logo/bentley.png",
    "/logo/intergraph.png",
    "/logo/auto-cad.png",
    "/logo/graphisoft.png",
    "/logo/autodesk.png",
    "/logo/tekla.png",
    "/logo/aspen.png",
    "/logo/staad.png",
    "/logo/caesar.png",
    "/logo/open-plant.png",
    "/logo/autodesk-3ds.png",
    "/logo/lfm.png",
    "/logo/leica.png",
    "/logo/micro-station.png",
    "/logo/aspen-analyser.png",
    "/logo/ansys.png",
    "/logo/nx.png",
    "/logo/autodesk-plant1.png",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 max-sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="bg-blue-50 hover:bg-white p-4 grid rounded-lg md:rounded-lg max-sm:rounded-lg place-items-center relative"
        >
          <div className="pb-[100%] grid-area-1" />
          <img
            src={src}
            alt=""
            className="w-full absolute justify-center items-center top-0 left-0 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;