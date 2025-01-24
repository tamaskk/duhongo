import Nav from "@/components/Nav";
import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@/components/Table";
import Carousel from "@/components/carousel";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Action from "@/components/action";

const index = () => {
  const [images, setImages] = React.useState<{
    original: string;
    text: string;
  }[]>([]);
  const [presentation, setPresentation] = React.useState<{
    original: string;
    thumbnail: string;
  }[]>([]);
  const firstRender = useRef(true);
  const [prices, setPrices] = useState<any>()

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getImages();
      return;
    }
  }, []);

  const getImages = async () => {
    try {
      const res = await fetch("/api/mainPage");
      if (!res.ok) {
        throw new Error("Failed to fetch Gallery");
      }
      const data = await res.json();
      const images = Array.isArray(data.sections)
        ? data.sections.map((section: any) => ({
            original: section.imageUrl,
            text: section.text,
          }))
        : [];

      const imagesPresentation = Array.isArray(data.presentation)
        ? data.presentation.map((section: any) => ({
            original: section.imageUrl,
            thumbnail: section.imageUrl,
          }))
        : [];

      setImages(images);
      setPresentation(imagesPresentation);
      setPrices(data.prices)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen overflow-y-auto overflow-x-hidden bg-black">
      <Action />
      <Nav />
      <div className="mx-auto mt-10 sm:mt-5 w-full p-0">
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
                  alt="Gallery"
                />
                <div className="absolute w-full inset-0 flex items-center justify-center bg-black text-5xl font-bold bg-opacity-50 text-white p-4">
                  {
                    images.find((image) => image.original === e.original)?.text
                  }
                </div>
              </div>
            );
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center my-20 mt-32">
        <p className="text-2xl sm:text-3xl font-bold text-center">
          Az ország kedvenc rage room-a megérkezett Tatára!
        </p>
        <button className="bg-black mt-5 text-white drop-shadow-md shadow-red-800 rounded-md p-2 shadow-md hover:shadow-red-900 hover:shadow-lg transition-all duration-300">
          Foglalj időpontot most!
        </button>
      </div>
      <Table 
        prices={prices}
      />
      <Reviews />
      <Carousel presentation={presentation} />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;

