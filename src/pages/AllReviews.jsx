import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { FaHeart, FaStar } from "react-icons/fa";

const AllReviews = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");


  const { data: allReviews = [], isLoading, refetch } = useQuery({
    queryKey: ["allReviews", searchTerm],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/all-reviews?search=${searchTerm}`
      );
      return res.data;
    },
  });

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

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">All Reviews</h2>

      {/*  Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center mb-8"
      >
        <input
          type="text"
          placeholder="Search by food name..."
          className="input input-bordered w-full max-w-md mr-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* All Reviews with Grid View */}
      {allReviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((review) => (
            <div
              key={review._id}
              className="card bg-base-200 shadow-md hover:shadow-lg rounded-xl"
            >
              <figure>
                <img
                  src={review.image} 
                  alt={review.foodName}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                  {review.foodName}
                </h3>
                <p className="text-sm text-gray-500">
                  {review.restaurant} — {review.location}
                </p>

                <div className="flex items-center text-yellow-500 mt-1">
                  <FaStar /> <span className="ml-1">{review.rating}</span>
                </div>

                <p className="text-gray-700 mt-2 line-clamp-3">{review.review}</p>
                <div className="flex justify-between items-center mt-3">
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleAddFavorite(review)}
                  >
                    <FaHeart className="text-red-500 mr-1" /> Favorite
                  </button>

                  <button
                    onClick={() => navigate(`/review/${review._id}`)}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Back to Home */}
      <div className="text-center mt-10">
        <button onClick={() => navigate("/")} className="btn btn-outline">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AllReviews;
