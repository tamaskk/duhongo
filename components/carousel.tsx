import React from "react";
import ImageGallery from "react-image-gallery";

const Carousel = ({ presentation }: { presentation: {
  original: string;
  thumbnail: string;
}[] }) => {
  return (
    <div className="mx-auto mt-10 sm:mt-5 w-full p-0">
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        items={presentation || []}
        renderItem={(e) => {
          return (
            <div className="h-[800px] w-full relative">
              <img
                src={e.original}
                className="h-[800px] w-full sm:w-[90%] sm:mx-auto object-cover"
                alt="Carousel"
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default Carousel;
