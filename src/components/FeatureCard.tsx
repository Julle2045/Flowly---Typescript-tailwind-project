import React from "react";
import type { FeatureCardProps } from "../types";


const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
            <div className="text-blue-600 mb-4 text-4xl">{ icon }</div>
            <h3 className="text-xl font-semibold mb-2">{ title }</h3>
            <p className="text-gray-600">{ description }</p>
        </div>
    );
};

export default FeatureCard;