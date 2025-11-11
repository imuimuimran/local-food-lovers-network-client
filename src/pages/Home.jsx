import React from "react";
import Banner from "../components/Banner";
import FeaturedReviews from "../components/FeaturedReviews";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedReviews />
    </div>
  );
};

export default Home;
