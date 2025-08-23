import img from "../assets/images/park.jpg";
import img2 from "../assets/images/waterfall.jpg";
import img3 from "../assets/images/glacier.jpg";
import img4 from "../assets/images/river.jpg";
import img5 from "../assets/images/landscape.jpg";
import img6 from "../assets/images/sea_view.jpg";
import DestinationCard from "../Models/DestinationCard";

const destinations = [
  {
    img: img,
    locationName: "Kashmir Valley",
    countryName: "Pakistan",
    price: "120$",
    description:
      "Azad Jammu and Kashmir (AJK) is a region administered by Pakistan, known for its breathtaking valleys, snow-capped peaks, and vibrant culture. It’s one of the most scenic spots in South Asia.",
    buttonText: "More Details",
    rating: "4.9",
    duration: "6 Days / 5 Nights",
    transport: "Train & Jeep",
    bestTime: "April - October",
  },
  {
    img: img2,
    locationName: "Kumrat Valley",
    countryName: "Pakistan",
    price: "100$",
    description:
      "Kumrat Valley is a hidden gem in KPK’s Upper Dir District, famous for lush forests, alpine meadows, and pristine rivers. It’s a paradise for adventure lovers and campers.",
    buttonText: "More Details",
    rating: "4.7",
    duration: "4 Days / 3 Nights",
    transport: "Bus & Jeep",
    bestTime: "May - September",
  },
  {
    img: img3,
    locationName: "Skardu",
    countryName: "Pakistan",
    price: "150$",
    description:
      "Skardu, located in Gilgit-Baltistan, is the gateway to the world’s highest peaks including K2. It’s surrounded by majestic mountains, crystal-clear lakes, and rich Balti culture.",
    buttonText: "More Details",
    rating: "5.0",
    duration: "7 Days / 6 Nights",
    transport: "Train & Jeep",
    bestTime: "June - September",
  },
  {
    img: img4,
    locationName: "Fairy Meadows",
    countryName: "Pakistan",
    price: "130$",
    description:
      "Fairy Meadows offers a spectacular view of Nanga Parbat, the world’s ninth-highest mountain. Known for its lush green meadows and breathtaking treks.",
    buttonText: "More Details",
    rating: "4.8",
    duration: "5 Days / 4 Nights",
    transport: "Jeep & Trek",
    bestTime: "June - September",
  },
  {
    img: img5,
    locationName: "Hunza Valley",
    countryName: "Pakistan",
    price: "140$",
    description:
      "Hunza Valley is world-famous for its stunning mountain scenery, Attabad Lake, and hospitable people. A must-visit destination for nature lovers and photographers.",
    buttonText: "More Details",
    rating: "5.0",
    duration: "6 Days / 5 Nights",
    transport: "Bus & Jeep",
    bestTime: "April - October",
  },
  {
    img: img6,
    locationName: "Naran Kaghan",
    countryName: "Pakistan",
    price: "110$",
    description:
      "Naran Kaghan Valley is known for Saif-ul-Malook Lake, cool weather, and alpine beauty. It’s one of Pakistan’s top summer tourist spots.",
    buttonText: "More Details",
    rating: "4.6",
    duration: "3 Days / 2 Nights",
    transport: "Car & Jeep",
    bestTime: "May - September",
  },
];

const MainDestinationComp = () => {
  return (
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
    </div>
  );
};

export default MainDestinationComp;
