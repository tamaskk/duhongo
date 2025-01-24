import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Ensure ImageGallery styles are imported

const Reviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }

    const getReviews = async () => {
      try {
        // const response = await fetch("/api/reviews?placeid=ChIJFc59grlFakcRNnomTNkkJDc");
        const response = await fetch(
          "/api/reviews?placeid=ChIJFc59grlFakcRNnomTNkkJDc"
        );
        if (!response.ok) throw new Error("Failed to fetch reviews");

        const data = await response.json();
        console.log("Data:", data);
        setReviews(data);
        console.log("Reviews:", data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getReviews();
  }, []);

  return (
    <div className="w-full px-4 py-8 flex flex-col items-center mb-10">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-white">Értékelések</h2>

      <div
        className={`w-full mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${
          reviews.length > 5 ? 5 : reviews.length
        } gap-6`}
      >
        {reviews.length > 0 ? (
          reviews.map((review: any, index: number) => (
            <div
              key={index}
              className="bg-white shadow-md max-h-[360px] overflow-x-hidden overflow-y-auto rounded-lg p-6 flex items-start"
            >
              {/* Reviewer Profile Picture */}
              <img
                src={
                  review.profile_photo_url || "https://via.placeholder.com/50"
                }
                alt={review.author_name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />

              {/* Review Content */}
              <div className="flex-1">
                {/* Author and Rating */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">
                    {review.author_name}
                  </h3>
                  <div className="flex text-yellow-400">
                    {"★".repeat(review.rating)}
                    <span className="text-gray-300">
                      {"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mt-2 text-sm">
                  {review.text || "Nincs szöveges értékelés."}
                </p>

                {/* Date */}
                <span className="block text-gray-400 text-xs mt-2">
                  {new Date(review.time * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-2">
            Nincsenek elérhető értékelések.
          </p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
