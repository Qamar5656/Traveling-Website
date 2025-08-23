import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainDestinationComp from "../Destinations Content/MainDestinationComp";
import Footer from "../components/Footers";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <MainDestinationComp />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
