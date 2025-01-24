import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

type GalleryItem = {
  _id: string;
  images: string[];
  name: string;
  date: string;
};

const Galleria = () => {
  const router = useRouter();
  const [galleries, setGalleries] = useState<GalleryItem[][] | null>(null);
  const [presentation, setPresentation] = useState<any>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getImages();
    }
  }, []);

  const getImages = async () => {
    try {
      const res = await fetch("/api/galleries");
      if (!res.ok) {
        throw new Error("Failed to fetch gallery data");
      }
      const data = await res.json();
      console.log(data);
      if (data.gallery && Array.isArray(data.gallery)) {
        setGalleries(data.gallery);
        setPresentation(data.presentation);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (err) {
      console.error("Error fetching galleries:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-y-auto overflow-x-hidden bg-black">
      <Nav />
      {
        !presentation && (
          <div className="flex flex-col items-center justify-start min-h-screen text-white">
            <p>Betöltés...</p>
          </div>
        )
      }
      <div className="flex flex-col items-center px-5">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mt-10`}>
          {Array.isArray(presentation) && presentation.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between cursor-pointer"
            >
              <img
                className="h-[90%] max-w-full object-cover rounded-lg"
                src={item.imageUrl}
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 max-w-[1136px] py-20 px-[30px]">

            {
              Array.isArray(galleries) && galleries.map((image: any, index: any) => (
                    <div
                      key={index}
                      onClick={() => router.push(`/galeria/${image._id}`)}
                      className={`${
                        index % 2 === 0 && index % 2 === 0 ? "h-[400px]" : ""
                      } max-w-full flex flex-col items-start justify-between cursor-pointer`}
                    >
                      <img
                        className="h-[90%] max-w-full object-cover rounded-lg"
                        src={image.images[0]}
                        alt={`Gallery image ${index + 1}`}
                      />
                      <p>{image.name}</p>
                      <p>{image.date}</p>
                      <button
                        onClick={() => {
                          router.push(`/galeria/${image._id}`);
                        }}
                        className="text-left text-xs mt-5"
                      >
                        Kattints ide a galéria megnyitásához
                      </button>
                </div>
              ))
            }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Galleria;
