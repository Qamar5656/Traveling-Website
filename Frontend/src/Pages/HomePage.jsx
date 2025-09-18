import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainDestinationComp from "../Destinations Content/MainDestinationComp";
import Footer from "../components/Footers";
import MainTrainsPage from "../Trains Details/MainTrainsPage";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <MainDestinationComp />
        <MainTrainsPage />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
