import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Smith",
      title: "Founder, TechLabs",
      quote:
        "ISA-TECH delivers outstanding quality. Their devices are a perfect fit for professionals.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Johnson",
      title: "Gaming Enthusiast",
      quote:
        "Love their performance lineup! My new setup is blazing fast.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Lee",
      title: "Product Designer, NeoLabs",
      quote:
        "Beautifully designed and engineered — ISA-TECH’s attention to detail is next level.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <SectionWrapper id="testimonials" className="bg-gradient-to-b from-surface to-white">
      <h2 className="text-4xl font-bold text-center text-black mb-12">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="
              relative p-6 rounded-xl border border-gray-200 shadow-md
              bg-gradient-to-tr from-white via-blue-50 to-indigo-50
              hover:from-indigo-50 hover:via-white hover:to-blue-50
              transition-all duration-300
            "
          >
            {/* Accent bar on top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl" />

            <div className="flex items-center mb-4 mt-2">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary mr-4 shadow-sm"
              />
              <div>
                <h3 className="text-black font-semibold">{testimonial.name}</h3>
                <p className="text-gray-700 text-sm">{testimonial.title}</p>
              </div>
            </div>

            <p className="text-gray-800 italic leading-relaxed">
              “{testimonial.quote}”
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
