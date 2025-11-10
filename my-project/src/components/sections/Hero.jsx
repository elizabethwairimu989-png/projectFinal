import React from "react";
import Button from "../common/Button";
import SectionWrapper from "../common/SectionWrapper";

const heroImg = "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg";

const Hero = () => {
  return (
    <SectionWrapper id="home" className="bg-white">
      <div className="grid gap-10 items-center lg:grid-cols-2">
        {/* Text content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-black">
            Creative Tech for Modern Living
          </h1>
          <p className="text-lg text-gray-700">
            Discover cutting-edge electronics designed to make your daily life smarter, faster, and more connected.
          </p>
          <Button className="bg-black text-black hover:bg-gray-800">
            Shop Now
          </Button>
        </div>

        {/* Hero image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-lg rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
