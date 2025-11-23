import React from "react";

const Navigation = () => {
  return (
    <nav className="
      fixed top-0 left-0 w-full 
      bg-surface/80 backdrop-blur-md 
      border-b border-primary/20 
      z-50 px-8 py-4 
      flex justify-between items-center
    ">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-primary tracking-tight">
        ISA-TECH
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <a href="#home" className="text-text hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="text-text hover:text-primary">
            Features
          </a>
        </li>
        <li>
          <a href="#products" className="text-text hover:text-primary">
            Products
          </a>
        </li>
        <li>
          <a href="#contact" className="text-text hover:text-primary">
            Contacts
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-text hover:text-primary text-2xl">
        ☰
      </button>
    </nav>
  );
};

export default Navigation;
