import React from 'react';
import { useNavigate } from 'react-router';

const JoinOurCommunity = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="bg-accent text-white py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                        Join the Local Food Lovers Network
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed">
                        Share your favorite local dishes, discover hidden food gems, and
                        connect with foodies around Dhaka who share your passion for great
                        taste.
                    </p>
                    <button
                        onClick={() => navigate("/add-review")}
                        className="btn btn-primary rounded-full px-10"
                    >
                        Start Sharing Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default JoinOurCommunity;