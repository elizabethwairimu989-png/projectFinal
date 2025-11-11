import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Card from "../common/Card";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Ultrabook Laptop",
      description: "High performance with sleek design",
      price: "$1,250.00",
      img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    },
    {
      id: 2,
      title: "Wireless Earbuds",
      description: "Noise-cancelling and ergonomic fit",
      price: "$250.00",
      img: "https://images.pexels.com/photos/10104407/pexels-photo-10104407.jpeg",
    },
    {
      id: 3,
      title: "Smart Watch",
      description: "Health tracking with AMOLED display",
      price: "$350.00",
      img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    },
    {
      id: 4,
      title: "Gaming Keyboard",
      description: "Customizable RGB backlit keys",
      price: "$180.00",
      img: "https://images.pexels.com/photos/14553715/pexels-photo-14553715.jpeg",
    },
    // 💡 NEW PRODUCTS BELOW
    {
      id: 5,
      title: "Mechanical Gaming Mouse",
      description: "Ultra-responsive 8-button programmable mouse with RGB lighting",
      price: "$95.00",
      img: "https://images.pexels.com/photos/28779691/pexels-photo-28779691.jpeg",
    },
    {
      id: 6,
      title: "4K Monitor",
      description: "Crystal clear display with 144Hz refresh rate and HDR support",
      price: "$499.00",
      img: "https://images.pexels.com/photos/17330220/pexels-photo-17330220.jpeg",
    },
    {
      id: 7,
      title: "Portable Bluetooth Speaker",
      description: "Deep bass and waterproof design for outdoor adventures",
      price: "$120.00",
      img: "https://images.pexels.com/photos/18542243/pexels-photo-18542243.jpeg",
    },
    {
      id: 8,
      title: "VR Headset",
      description: "Immersive 360° gaming and media experience",
      price: "$699.00",
      img: "https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg",
    },
  ];

  return (
    <SectionWrapper
      id="products"
      title="Featured Products"
      subtitle="Best-in-class gadgets at your fingertips"
      description="Our hand-picked featured tech is ready to elevate your setup."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Products;
