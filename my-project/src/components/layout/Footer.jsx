import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white font-bold text-xl mb-4">ISA-TECH</h2>
          <p className="text-sm">
            Leading the future of electronics with cutting-edge tech for everyone.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Products</h3>
          <ul className="space-y-1">
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Smart Watches</li>
            <li>Gaming Consoles</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Warranty</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <ul className="space-y-1">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500">
        © ISA-TECH 2025 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
