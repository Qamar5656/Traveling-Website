import video from "../assets/images/sea_view_video.mp4";
import Button from "../Models/Button";
const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light">
          Explore Pakistan with{" "}
          <span className="text-primary">Pak Railfan</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 text-light">
          Uncover the beauty of railway journeys and scenic adventures.
        </p>
        <Button text="Get Started" />
      </div>
    </section>
  );
};

export default Hero;
