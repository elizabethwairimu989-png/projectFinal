import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";

const Newsletter = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6">Get More Discounts</h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our email list to receive exclusive offers and updates on new products.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-lg bg-gray-800 text-gray-200 w-full md:w-80 focus:ring focus:ring-blue-500"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Newsletter;
