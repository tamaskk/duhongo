import React from 'react'
import ImageGallery from "react-image-gallery";

const Carousel = () => {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];

  return (
          <div className="mx-auto mt-10 sm:mt-5 w-full p-0" style={{}}>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          items={images}
          renderItem={(e) => {
            return (
              <div className="h-[800px] w-full relative">
                <img
                  src={e.original}
                  className="h-[800px] w-full sm:w-[90%] sm:mx-auto object-cover"
                />
              </div>
            );
          }}
        />
      </div>
  )
}

export default Carousel