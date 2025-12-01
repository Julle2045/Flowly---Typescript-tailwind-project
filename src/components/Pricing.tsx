import React from "react";
import { plans } from "../data";

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeUp">
          Pricing
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`border rounded-xl p-6 shadow-sm flex flex-col transform transition hover:scale-[1.03] hover:shadow-xl animate-fadeUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-600">✔️</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg text-white transition ${
                  plan.isBest
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
              >
                {plan.isBest ? "Start Free Trial" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;