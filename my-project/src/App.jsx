import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Products />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
