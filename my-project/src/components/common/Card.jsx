import React from "react";

const Card = ({ img, title, description, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {description}
        </p>
        <p className="text-primary font-bold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
