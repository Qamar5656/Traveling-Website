import img from "../assets/images/new_coach.jpg";
import img2 from "../assets/images/ac_standard.jpg";
import img3 from "../assets/images/station_geu40.jpg";
import img4 from "../assets/images/geu_40.jpg";
import img5 from "../assets/images/new_coach.jpg";
import img6 from "../assets/images/ac_standard.jpg";
import DestinationCard from "../Models/DestinationCard";

const MainTrainsPage = () => {
  const destinations = [
    {
      img: img,
      locationName: "GreenLine Express",
      countryName: "Lahore, Pakistan",
      price: "",
      description:
        "Greenline Express is the premium train of Pakistan Railways, which runs between Rawalpindi and Karachi via Lahore station",
      buttonText: "More Details",
      rating: "4.9",
      duration: "17 hours 10 minutes",
      transport: "",
      bestTime: "Rawalpindi - Lahore - Karachi",
    },
    {
      img: img2,
      locationName: "Karakoram Express",
      countryName: "Rawalpindi, Pakistan",
      price: "",
      description:
        "Karakoram Express is the premium train of Pakistan Railways, which runs between Karachi and Lahore via Faisalabad station.",
      buttonText: "More Details",
      rating: "4.7",
      duration: "19 hours 20 minutes",
      transport: "",
      bestTime: "Lahore - Karachi",
    },
    {
      img: img3,
      locationName: "Skardu",
      countryName: "Lahore, Pakistan",
      price: "",
      description:
        "Pak Business Express is the premium train of Pakistan Railways, which runs between Karachi and Lahore via Sahiwal station.",
      buttonText: "More Details",
      rating: "5.0",
      duration: "19 hours 30 minutes",
      transport: "",
      bestTime: "Lahore - Karachi",
    },
    {
      img: img4,
      locationName: "Karachi Express",
      countryName: "Lahore, Pakistan",
      price: "",
      description:
        "This train runs between Lahore and Karachi station via Sahiwal station.",
      buttonText: "More Details",
      rating: "4.8",
      duration: "19 hours 40 minutes",
      transport: "k",
      bestTime: "Lahore - Karachi",
    },
    {
      img: img5,
      locationName: "Tezgam Express",
      countryName: "Lahore, Pakistan",
      price: "",
      description:
        "This train runs between Lahore and Karachi station via Sahiwal station.",
      buttonText: "More Details",
      rating: "5.0",
      duration: "19 hours 40 minutes",
      transport: "",
      bestTime: "Lahore - Karachi",
    },
    {
      img: img6,
      locationName: "Shalimar Express",
      countryName: "Lahore, Pakistan",
      price: "",
      description:
        "This train runs between Lahore and Karachi station via Faisalabad station.",
      buttonText: "More Details",
      rating: "4.6",
      duration: "19 hours 40 minutes",
      transport: "",
      bestTime: "Lahore - Karachi",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Section Heading */}
        <h1 className="py-6 font-bold text-2xl md:text-3xl lg:text-4xl">
          Most Popular <span className="text-primary">Trains</span>
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
