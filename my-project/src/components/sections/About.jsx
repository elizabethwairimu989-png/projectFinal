import React from "react";
import SectionWrapper from "../common/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text content */}
        <div>
          <h2 className="text-4xl font-bold text-pink-600 mb-6">
            About ISA-Tech
          </h2>
          <p className="text-gray-700 mb-4">
            ISA-TECH is a forward-thinking technology company dedicated to providing innovative software solutions 
            for businesses and individuals. Our mission is to bridge the gap between cutting-edge technology and 
            everyday usability.
          </p>
          <p className="text-gray-700 mb-4">
            We specialize in web development, mobile applications, and cloud solutions, ensuring seamless user 
            experiences and scalable solutions. Our team combines expertise, creativity, and dedication to help 
            clients achieve their goals.
          </p>
          <p className="text-gray-700">
            At ISA-Tech, we believe technology should empower people, simplify processes, and drive growth. Join us 
            on our journey to make innovative technology accessible to everyone.
          </p>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092795360-30a2c6a7b9db?auto=format&fit=crop&w=800&q=80"
            alt="ISA-Tech Team"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
