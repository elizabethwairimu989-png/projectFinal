import React from "react";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg"
          alt="Fresh organic groceries"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 min-h-[80vh] md:min-h-[90vh]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Creative Tech for Modern Living{" "}
          <span className="text-primary">ISA-TECH</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Discover cutting-edge electronics designed to make your daily life
          smarter, faster, and more connected.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button text="Shop Now" variant="primary" />
          <Button text="View Products" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
