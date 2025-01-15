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
  const [galleries, setGalleries] = useState<GalleryItem[][]>([]);
  const [showOverlayId, setShowOverlayId] = useState<null | string>(null);
  const [password, setPassword] = useState("");
  const [presentation, setPresentation] = useState<any>([]);
  const firstRender = useRef(true);

  const chunkArray = (array: GalleryItem[], size: number): GalleryItem[][] => {
    const chunks: GalleryItem[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getImages();
    }
  }, []);

  useEffect(() => {
    console.log(galleries);
  }, [galleries]);

  const getImages = async () => {
    try {
      const res = await fetch("/api/galleries");
      if (!res.ok) {
        throw new Error("Failed to fetch gallery data");
      }
      const data = await res.json();
      console.log(data);
      if (data.gallery && Array.isArray(data.gallery)) {
        const imageChunks = chunkArray(data.gallery, 3);
        setGalleries(imageChunks);
        setPresentation(data.presentation);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (err) {
      console.error("Error fetching galleries:", err);
    }
  };

  const gridColumns = () => {
    switch (presentation.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";
      default:
        return "grid-cols-1";
    }
  };

  // Make a password overlay

  const PasswordOverlay = () => {
    const [password, setPassword] = useState("");

    const checkPassword = async () => {
      try {
        const res = await fetch(
          `/api/password?id=${showOverlayId}&password=${password}`
        );
        if (!res.ok) {
          throw new Error("Failed to check password");
        }
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("gallery", JSON.stringify({
            id: showOverlayId,
            successPassword: true
          }));
          router.push(`/galleria/${showOverlayId}`);
        } else {
          alert("Invalid password");
        }
      } catch (err) {
        console.error("Error checking password:", err);
      }
    };

    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="text-2xl text-black font-bold">Galéria jelszó</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            className="border text-black border-gray-300 rounded-lg p-2 w-full mt-5"
            placeholder="Jelszó"
          />
          <button
            onClick={checkPassword}
            className="bg-black text-white rounded-lg p-2 w-full mt-5"
          >
            Belépés
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-y-auto overflow-x-hidden bg-black">
      <Nav />
      {showOverlayId && <PasswordOverlay />}
      <div className="flex flex-col items-center px-5">
        <div className={`grid ${gridColumns()} gap-4 mx-auto mt-10`}>
          {presentation.map((item: any, index: number) => (
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
          {galleries.map((chunk, index) => (
            <div key={index} className="grid gap-14">
              {chunk.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  onClick={() => setShowOverlayId(image._id)}
                  className={`${
                    index % 2 === 0 && imgIndex % 2 === 0 ? "h-[400px]" : ""
                  } max-w-full flex flex-col items-start justify-between cursor-pointer`}
                >
                  <img
                    className="h-[90%] max-w-full object-cover rounded-lg"
                    src={image.images[0]}
                    alt={`Gallery image ${imgIndex + 1}`}
                  />
                  <p>{image.name}</p>
                  <p>{image.date}</p>
                  <button
                    onClick={() => setShowOverlayId(image._id)}
                    className="text-left text-xs mt-5"
                  >
                    Kattints ide a galéria megnyitásához
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Galleria;
