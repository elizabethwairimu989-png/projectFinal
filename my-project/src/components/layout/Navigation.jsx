import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-2xl font-bold text-blue-400 tracking-tight">ISA-TECH</h1>
      <ul className="hidden md:flex gap-8 text-white font-medium">
        <li><a href="#home" className="hover:text-blue-300">Home</a></li>
        <li><a href="#features" className="hover:text-blue-300">Features</a></li>
        <li><a href="#products" className="hover:text-blue-300">Products</a></li>
        <li><a href="#contact" className="hover:text-blue-300">Contacts</a></li>
      </ul>
      <button className="md:hidden text-white">☰</button>
    </nav>
  );
};

export default Navigation;
