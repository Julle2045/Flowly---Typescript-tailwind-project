import React from "react";

const CTA: React.FC = () => {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-4xl font-bold mb-6">
                    Ready to get organized?
                </h2>

                <p className="text-lg mb-8 text-blue-100">
                    Start your free trial today and experience how Flowly can transform your productivity.
                </p>

                <button className="bg-white text-blue-600 font-semibold px-8 py-4 roundedxl shadow-lg hover:bg-blue-50 transition">
                    Start Free Trial
                </button>
            </div>
        </section>
    );
};

export default CTA;