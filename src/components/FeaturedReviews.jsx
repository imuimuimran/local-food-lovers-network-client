import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaHeart, FaStar } from "react-icons/fa";
import Loading from "./Loading";
import { useNavigate } from "react-router";
import { useAuth } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const FeaturedReviews = () => {
  const { user } = useAuth();
  // Fetch top-rated 6 Reviews 
  const navigate = useNavigate();
  const {
    data: featuredReviews = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featuredReviews"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/featured-reviews");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-red-500 mt-8">Failed to load featured reviews.</p>;


  const handleAddFavorite = async (food) => {
    if (!user) {
      navigate("/login");
      return;
    }

    const favoriteData = {
      foodName: food.foodName,
      restaurant: food.restaurant,
      image: food.image,
      userEmail: user.email,
      date: new Date(),
    };

    try {
      await axios.post("http://localhost:3000/favorites", favoriteData);
      toast.success("Added to favorites!");
    } catch (error) {
      toast.error("Failed to add favorite.");
    }
  };


  return (
    <div className="my-20 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
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
                <button
                  onClick={() => handleAddFavorite(item.foodName)}
                  className="btn btn-sm btn-ghost text-red-500 hover:text-red-600">
                  <FaHeart />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Reviewer: <span className="font-medium">{item.reviewer}</span>
              </p>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => navigate(`/review/${item._id}`)}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/all-reviews")}
          className="btn btn-accent rounded-full px-8">Show All Review
        </button>
      </div>
    </div>
  );
};

export default FeaturedReviews;
