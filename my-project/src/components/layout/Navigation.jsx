import React from "react";

const Navigation = () => {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full 
        bg-surface/80 backdrop-blur-md
        border-b border-primary/20 
        z-50 px-8 py-4 
        flex justify-between items-center
      "
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-primary tracking-tight">
        ISA-TECH
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-medium items-center">
        {["home", "features", "products", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="
                text-text hover:text-primary transition-colors
                relative group
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* Hover underline animation */}
              <span
                className="
                  absolute bottom-0 left-0 w-0 h-[2px] bg-primary 
                  transition-all duration-300 group-hover:w-full
                "
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-text hover:text-primary text-3xl">
        ☰
      </button>
    </nav>
  );
};

export default Navigation;
