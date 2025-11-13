import React from "react";
import Banner from "../components/Banner";
import FeaturedReviews from "../components/FeaturedReviews";
import PopularFoodSpots from "../components/PopularFoodSpots";
import JoinOurCommunity from "../components/JoinOurCommunity";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedReviews />
      <JoinOurCommunity />
      <PopularFoodSpots />
    </div>
  );
};

export default Home;
