import React from "react";
import Banner from "../components/Banner";
import FeaturedReviews from "../components/FeaturedReviews";
import PopularFoodSpots from "../components/PopularFoodSpots";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedReviews />
      <PopularFoodSpots />
    </div>
  );
};

export default Home;
