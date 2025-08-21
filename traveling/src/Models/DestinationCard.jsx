import { FaMapMarkerAlt, FaStar, FaClock, FaTrain } from "react-icons/fa";
import Button from "./Button";

const DestinationCard = ({
  img,
  locationName,
  countryName,
  price,
  description,
  buttonText,
  rating,
  duration,
  transport,
  bestTime,
}) => {
  return (
    <div className="bg-surface rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer">
      {/* Image with hover */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={img}
          alt={locationName}
          className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-lg md:text-xl font-bold text-surface">
          {locationName}
        </h2>

        <div className="flex items-center gap-2 text-sm text-surface">
          <FaMapMarkerAlt className="text-primary" />
          <span>{countryName}</span>
        </div>

        {/* Extra Details */}
        <div className="flex justify-between text-xs md:text-sm text-surface">
          <div className="flex items-center gap-1">
            <FaStar className="text-accent" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-secondary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaTrain className="text-primary" />
            <span>{transport}</span>
          </div>
        </div>

        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          <strong>Best Time:</strong> {bestTime}
        </div>

        <div className="flex justify-between items-center text-sm md:text-base font-semibold">
          <span className="text-surface">Standard</span>
          <span className="text-primary">{price}</span>
        </div>

        <p className="text-sm md:text-base text-surface line-clamp-3">
          {description}
        </p>

        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default DestinationCard;
