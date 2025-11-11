import React, { useEffect, useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch dynamic products from backend
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <SectionWrapper
      id="products"
      title="Featured Products"
      subtitle="Best-in-class gadgets at your fingertips"
      description="Our hand-picked featured tech is ready to elevate your setup."
    >
      {products.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">Loading products...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product._id}
              img={product.image}
              title={product.name}
              description={product.description}
              price={`$${product.price}`}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default Products;
