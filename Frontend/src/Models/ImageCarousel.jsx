// src/Models/ImageCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import img1 from "../assets/images/park.jpg";
import img2 from "../assets/images/river.jpg";
import img3 from "../assets/images/sea_view.jpg";

const ImageCarousel = () => {
  const images = [
    { src: img1, alt: "Park" },
    { src: img2, alt: "River" },
    { src: img3, alt: "Landscape Glacier" },
  ];
  return (
    <Swiper
      modules={[Navigation, Autoplay, Keyboard]}
      navigation
      keyboard={{ enabled: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="rounded-lg w-full h-full"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover bg-cover pointer-events-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
