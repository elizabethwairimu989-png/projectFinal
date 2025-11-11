import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const Stats = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Devices Sold", value: "50K+" },
    { label: "Tech Partners", value: "200+" },
    { label: "Countries Served", value: "15" },
  ];

  return (
    <SectionWrapper
      id="stats"
      title="Our Impact in Numbers"
      subtitle="Driven by innovation, trusted across the globe."
      className="bg-gray-100 text-black py-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group transform transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-5xl font-extrabold text-black drop-shadow-sm">
              {stat.value}
            </h2>
            <p className="text-gray-600 font-semibold mt-3 tracking-wide group-hover:text-blue-600 transition-colors">
              {stat.label}
            </p>
            <div className="mt-3 w-12 h-1 mx-auto bg-blue-500 group-hover:w-20 transition-all duration-300 rounded-full"></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Stats;
