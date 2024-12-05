import Nav from "@/components/Nav";
import React from "react";
import ImageGallery from "react-image-gallery";
import MenuIcon from '@mui/icons-material/Menu';

const index = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      text: "Autózúzás",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      text: "Gép törés",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      text: "Rage Room",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen overflow-y-auto overflow-x-hidden">
      <Nav />
      <div className="mx-auto mt-10 sm:mt-5 w-full p-0"
      style={{
      }}
      >
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          items={images}
          renderItem={(e) => {
            return (
              <div className="h-[600px] w-full relative">
                <img
                  src={e.original}
                  className="h-[700px] w-full sm:w-[90%] sm:mx-auto object-cover"
                />
                <div className="absolute w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
                  {
                    images.filter((image) => image.original === e.original)[0]
                      .text
                  }
                </div>
              </div>
            );
          }}
        />
      </div>
        <div className="flex flex-col items-center justify-center my-10">
          <p
            className="text-2xl sm:text-3xl font-bold text-center"
          >
          Az ország kedvenc rage room-a megérkezett Tatára!
          </p>
          <button
            className="bg-black mt-5 text-white drop-shadow-md shadow-red-800 rounded-md p-2 shadow-md hover:shadow-red-900 hover:shadow-lg transition-all duration-300"
          >
            Foglalj időpontot most!
          </button>
        </div>
    </div>
  );
};

export default index;
