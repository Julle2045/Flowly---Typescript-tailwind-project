import React from "react";
import * as Icons from "lucide-react";
import { features } from "../data/index";

const iconMap: Record<string, React.ElementType> = {
  CheckCircle: Icons.CheckCircle,
  Calendar: Icons.Calendar,
  Users: Icons.Users,
};

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon];

          return (
            <div
              key={feature.id}
              className={`p-6 bg-white shadow rounded-lg transform transition hover:scale-105 hover:shadow-lg animate-fadeUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4 hover-wiggle" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}