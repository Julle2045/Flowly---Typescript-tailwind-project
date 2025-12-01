import React from "react";
import { steps } from "../data";




const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step) => (
                        <div
                        key={step.id}
                        className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold mb-4">
                                {step.id}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                                </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;