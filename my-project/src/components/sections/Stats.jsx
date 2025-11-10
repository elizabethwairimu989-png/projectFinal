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
    <SectionWrapper>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-blue-400">{stat.value}</h2>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Stats;
