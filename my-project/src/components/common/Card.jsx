import React from "react";

const Card = ({ img, title, description, price }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-4 text-blue-600 font-bold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
