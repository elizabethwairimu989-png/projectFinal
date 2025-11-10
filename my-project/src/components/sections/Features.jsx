import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const Features = () => {
  const features = [
    {
      title: "Smart Integration",
      description: "Connect all your devices seamlessly with our tech ecosystem.",
      icon: "🔗", // Emoji as icon
    },
    {
      title: "CyberSecure Systems",
      description: "Keep your data safe with the latest in encryption tech.",
      icon: "🛡️",
    },
    {
      title: "High-Performance Hardware",
      description: "Top-tier performance laptops built for speed and capacity.",
      icon: "💻",
    },
  ];

  return (
    <SectionWrapper id="features">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Why Choose ISA-TECH?
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{feature.icon}</div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
