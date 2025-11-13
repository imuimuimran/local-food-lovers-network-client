import React, { useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { FaTrashAlt, FaEdit, FaStar } from "react-icons/fa";

const MyReviews = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [editingReview, setEditingReview] = useState(null);
  const [newReviewText, setNewReviewText] = useState("");

  const {
    data: myReviews = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myReviews", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/my-reviews?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this review?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/reviews/${id}`);
      toast.success("Review deleted successfully!");
      queryClient.invalidateQueries(["myReviews", user.email]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete review.");
    }
  };

  const startEdit = (review) => {
    setEditingReview(review._id);
    setNewReviewText(review.review);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/reviews/${id}`, {
        review: newReviewText,
      });
      toast.success("Review updated!");
      setEditingReview(null);
      queryClient.invalidateQueries(["myReviews", user.email]);
    } catch (error) {
      toast.error("Failed to update review.");
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-red-500 mt-10">Failed to load reviews.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Reviews</h2>

      {myReviews.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t added any reviews yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myReviews.map((review) => (
            <div key={review._id} className="card bg-base-200 shadow-lg rounded-2xl">
              <figure>
                <img
                  src={review.image}
                  alt={review.foodName}
                  className="h-48 w-full object-cover rounded-t-2xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">{review.foodName}</h3>
                <p className="text-sm text-gray-500">{review.restaurant} — {review.location}</p>
                <div className="flex items-center gap-2 mt-2 text-yellow-500">
                  <FaStar /> {review.rating}
                </div>

                {editingReview === review._id ? (
                  <>
                    <textarea
                      className="textarea textarea-bordered w-full mt-3"
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                    />
                    <div className="flex gap-3 mt-3">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleUpdate(review._id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={() => setEditingReview(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mt-3 text-gray-700">{review.review}</p>
                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        onClick={() => startEdit(review)}
                        className="btn btn-outline btn-sm"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn btn-error btn-sm"
                      >
                        <FaTrashAlt /> Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
