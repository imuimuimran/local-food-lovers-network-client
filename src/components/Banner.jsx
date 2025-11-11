import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
        image:
        "https://i.ibb.co.com/VWQCj2c6/street-foods.jpg",
      text: "Discover the best street foods in Dhaka!",
    },
    {
      image:
        "https://i.ibb.co.com/ZDsVcrY/restaurant-food.jpg",
      text: "Find hidden restaurant gems near you.",
    },
    {
      image:
        "https://i.ibb.co.com/cSXYX82W/home-cooked-meals-2.webp",
      text: "Share your favorite home-cooked meals.",
    },
  ];

  return (
    <div className="w-full mt-4 md:mt-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className=""
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[350px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-50"></div>
              <div className="z-10 text-center text-white px-4">
                <h2 className="text-lg md:text-4xl font-bold mb-6">
                  {slide.text}
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button className="btn btn-primary rounded-full px-6">
                    EXPLORE FOOD
                  </button>
                  <button className="btn btn-outline btn-accent rounded-full px-6">
                    EXPLORE RESTAURANT
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
