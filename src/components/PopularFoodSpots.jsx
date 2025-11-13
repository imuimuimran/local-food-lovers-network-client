import React from 'react';

const PopularFoodSpots = () => {

    return (
        <div>
            <section className="max-w-6xl mx-auto px-4 my-20">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-primary">
                    Popular Food Spots in Dhaka
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Star Kabab & Restaurant",
                            location: "Dhanmondi, Dhaka",
                            image:
                                "https://i.ibb.co.com/vCVmZNL8/star-kabab.jpg",
                            desc: "Famous for their authentic kababs and paratha since decades.",
                        },
                        {
                            name: "Dhansiri Restaurant",
                            location: "Banani, Dhaka",
                            image:
                                "https://i.ibb.co.com/hRk3hVZs/Dhanshiri.jpg",
                            desc: "Best local Bangladeshi dishes with homely vibes.",
                        },
                        {
                            name: "Nanna Biriyani",
                            location: "Old Dhaka",
                            image:
                                "https://i.ibb.co.com/3V8MCbv/Hazi-Nanna.jpg",
                            desc: "Legendary biriyani with deep Old Dhaka flavor.",
                        },
                    ].map((spot, idx) => (
                        <div
                            key={idx}
                            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <figure>
                                <img
                                    src={spot.image}
                                    alt={spot.name}
                                    className="h-56 w-full object-cover rounded-t-xl"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold text-secondary">
                                    {spot.name}
                                </h3>
                                <p className="text-sm text-gray-600">{spot.location}</p>
                                <p className="text-sm mt-2">{spot.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PopularFoodSpots;