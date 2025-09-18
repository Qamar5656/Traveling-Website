import Button from "../Models/Button";
import ImageCarousel from "../Models/ImageCarousel";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Image Carousel as background */}
      <ImageCarousel />

      {/* Overlay */}
      <div className="absolute top-0 w-full h-full  bg-black/30 z-10"></div>

      {/* Text Content */}
      <div className="absolute z-20 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light">
          Explore Pakistan with{" "}
          <span className="text-primary">Pak Railfan</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 text-light">
          Uncover the beauty of railway journeys and scenic adventures.
        </p>
        {/* get started button */}
        <Button text="Get Started" />
      </div>
    </section>
  );
};

export default Hero;
