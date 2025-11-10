import React from "react";

const SectionWrapper = ({ id, children }) => {
  return (
    <section id={id} className="py-20 px-8 md:px-20 bg-white text-white">
      {children}
    </section>
  );
};

export default SectionWrapper;
