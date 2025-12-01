import React from "react";
import { heroData } from "../data/index";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fadeUp">
          {heroData.title}
        </h1>

        <p className="text-lg text-gray-700 mb-8 animate-fadeUp delay-1">
          {heroData.subtitle}
        </p>

        <div className="flex justify-center gap-4 animate-fadeUp delay-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Start Free Trial
          </button>

          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
