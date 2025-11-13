import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { FaTrashAlt, FaHeart } from "react-icons/fa";

const MyFavorites = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch all favorites for particular logged in user
  const {
    data: favorites = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["favorites", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/favorites?email=${user.email}`);
      return res.data;
    },
  });

  // Delete a favorite for particular logged in user
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this favorite food from the list?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/favorites/${id}`);
      toast.success("Removed from favorites!");
      queryClient.invalidateQueries(["favorites", user.email]);
    } catch (error) {
      toast.error("Failed to delete favorite.");
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-red-500 mt-10">Failed to load favorites.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Favorite Foods</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any favorite foods yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-base-200 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-base-300 text-base font-semibold text-center">
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Restaurant</th>
                <th>Date Added</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((fav) => (
                <tr key={fav._id} className="hover:bg-base-100 text-center">
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={fav.image} alt={fav.foodName} />
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{fav.foodName}</td>
                  <td>{fav.restaurant}</td>
                  <td>{new Date(fav.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(fav._id)}
                      className="btn btn-error btn-sm"
                    >
                      <FaTrashAlt className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
