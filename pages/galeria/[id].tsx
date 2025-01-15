import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

type OverlayProps = {
  img: string;
  setShowOverlay: (value: boolean) => void;
};

const OverLayWithImg = ({ img, setShowOverlay }: OverlayProps) => {
  return (
    <div className="absolute w-full inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white p-4 z-50">
      <button
        className="absolute max-sm:top-16 max-sm:right-[14px] top-5 right-5 text-red-500 bg-black bg-opacity-50 rounded-full p-2"
        onClick={() => setShowOverlay(false)}
      >
        ✖
      </button>
      <img src={img} className="w-auto h-[90vh] object-contain" alt="Overlay" />
    </div>
  );
};

const IdPage = () => {
  const router = useRouter();
  const [filteredGallery, setFilteredGallery] = useState<any>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayImg, setOverlayImg] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : "auto";
    // Scroll to top when overlay is opened
    if (showOverlay) {
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);


  useEffect(() => {

  
    if (firstRender.current && router.query.id) {
      const galleryItem = JSON.parse(localStorage.getItem("gallery") as string);
      if (galleryItem.id !== router.query.id) {
        router.push("/galleria");
      }
      firstRender.current = false;
      getImages();
    }
  }, [router.query.id]);
  


  const getImages = async () => {
    try {
      const res = await fetch(`/api/galleries?id=${router.query.id as string}`);
      if (!res.ok) {
        console.log("Failed to fetch galleries");
        setFilteredGallery([]);
      }
      const data = await res.json();
      if (data.gallery?.length === 0) {
        setFilteredGallery([]);
      } else {
        setFilteredGallery(data.gallery?.[0]);
      }
    } catch (err) {
      console.error("Error fetching galleries:", err);
    }
  };

  if (!filteredGallery) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <Nav />
        <p>Loading...</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-y-auto bg-black">
      <Nav />
      {showOverlay && (
        <OverLayWithImg img={overlayImg} setShowOverlay={setShowOverlay} />
      )}
      <div className="flex flex-col items-center justify-center mt-10 gap-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          {filteredGallery.name}
        </h1>
        <p className="text-lg sm:text-xl text-center">{filteredGallery.date}</p>
      </div>
      <div className="flex my-20 px-5 sm:px-10 flex-row items-center justify-center flex-wrap gap-5">
        {filteredGallery.images?.map((item: any, index: number) => (
          <img
            key={`${filteredGallery._id}-${index}`}
            src={item}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => {
              setShowOverlay(true);
              setOverlayImg(item);
            }}
            className="h-auto w-[300px] sm:mx-auto object-cover cursor-pointer"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default IdPage;
