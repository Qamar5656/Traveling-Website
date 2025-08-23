import React from "react";

const MainTrainsPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Section Heading */}
        <h1 className="py-6 font-bold text-2xl md:text-3xl lg:text-4xl">
          Most Visited <span className="text-primary">Places</span>
        </h1>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>{" "}
    </>
  );
};

export default MainTrainsPage;
