// src/Models/ImageCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/images/park.jpg";
import img2 from "../assets/images/river.jpg";
import img3 from "../assets/images/landscape.jpg";

const images = [
  { src: img1, alt: "Park" },
  { src: img2, alt: "River" },
  { src: img3, alt: "Landscape Glacier" },
];

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="relative top-0 left-0 w-full h-full z-0"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover cursor-pointer"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
