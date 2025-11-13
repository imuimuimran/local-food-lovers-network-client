import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../provider/AuthProvider";

const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const reviewData = {
      ...data,
      reviewer: user?.displayName || "Anonymous",
      reviewerEmail: user?.email,
      reviewerPhoto: user?.photoURL,
      date: new Date().toISOString(),
      rating: parseFloat(data.rating),
    };

    try {
      await axios.post("http://localhost:3000/reviews", reviewData);
      toast.success("Review added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add review. Try again!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Add a Food Review</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Food Name Part */}
        <div>
          <label className="font-medium">Food Name</label>
          <input
            type="text"
            {...register("foodName", { required: true })}
            placeholder="Enter food name"
            className="input input-bordered w-full mt-1"
          />
          {errors.foodName && <p className="text-error text-sm">Food name is required</p>}
        </div>

        {/* Restaurant Name Part */}
        <div>
          <label className="font-medium">Restaurant Name</label>
          <input
            type="text"
            {...register("restaurant", { required: true })}
            placeholder="Enter restaurant name"
            className="input input-bordered w-full mt-1"
          />
          {errors.restaurant && <p className="text-error text-sm">Restaurant is required</p>}
        </div>

        {/* Location Part */}
        <div>
          <label className="font-medium">Location</label>
          <input
            type="text"
            {...register("location", { required: true })}
            placeholder="Enter restaurant location"
            className="input input-bordered w-full mt-1"
          />
          {errors.location && <p className="text-error text-sm">Location is required</p>}
        </div>

        {/* Food Image URL Part */}
        <div>
          <label className="font-medium">Image URL</label>
          <input
            type="url"
            {...register("image", { required: true })}
            placeholder="Paste image URL"
            className="input input-bordered w-full mt-1"
          />
          {errors.image && <p className="text-error text-sm">Image URL is required</p>}
        </div>

        {/* Rating Part */}
        <div>
          <label className="font-medium">Rating (1-5)</label>
          <input
            type="number"
            step="0.1"
            min="1"
            max="5"
            {...register("rating", { required: true, min: 1, max: 5 })}
            placeholder="Enter rating"
            className="input input-bordered w-full mt-1"
          />
          {errors.rating && <p className="text-error text-sm">Rating must be between 1 and 5</p>}
        </div>

        {/* Review Text Part */}
        <div>
          <label className="font-medium">Your Review</label>
          <textarea
            {...register("review", { required: true })}
            placeholder="Write your review..."
            className="textarea textarea-bordered w-full mt-1"
            rows="4"
          ></textarea>
          {errors.review && <p className="text-error text-sm">Review is required</p>}
        </div>

        {/* Submit Button Part */}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
