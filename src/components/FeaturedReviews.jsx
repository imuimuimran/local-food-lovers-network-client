import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const FeaturedReviews = () => {
  const featuredReviews = [
    {
      _id: 1,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
      foodName: "Kacchi Biryani",
      restaurant: "Star Kabab & Restaurant",
      location: "Dhanmondi, Dhaka",
      reviewer: "Rafi Ahmed",
      rating: 4.8,
    },
    {
      _id: 2,
      image: "https://images.unsplash.com/photo-1601050690597-1a4bcb3a1d7f?auto=format&fit=crop&w=600&q=80",
      foodName: "Beef Bhuna",
      restaurant: "Hazir Biriyani",
      location: "Old Dhaka",
      reviewer: "Sumaiya Noor",
      rating: 4.9,
    },
    {
      _id: 3,
      image: "https://images.unsplash.com/photo-1604909052868-f0e983f46f4f?auto=format&fit=crop&w=600&q=80",
      foodName: "Faluda",
      restaurant: "Sultan's Dine",
      location: "Banani, Dhaka",
      reviewer: "Nayeem Khan",
      rating: 4.7,
    },
  ];

  return (
    <div className="my-10 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Featured Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredReviews.map((item) => (
          <div
            key={item._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
          >
            <figure>
              <img
                src={item.image}
                alt={item.foodName}
                className="h-56 w-full object-cover rounded-t-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                {item.foodName}
              </h2>
              <p className="text-gray-500 text-sm">
                {item.restaurant} — {item.location}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="flex items-center gap-1 text-yellow-500">
                  <FaStar /> {item.rating}
                </span>
                <button className="btn btn-sm btn-ghost text-red-500 hover:text-red-600">
                  <FaHeart />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Reviewer: <span className="font-medium">{item.reviewer}</span>
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline btn-primary btn-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="btn btn-accent rounded-full px-8">
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedReviews;
