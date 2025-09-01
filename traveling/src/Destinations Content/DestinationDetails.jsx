import { useLocation } from "react-router-dom";

const DestinationDetails = () => {
  const location = useLocation();
  const { destination } = location.state || {};

  if (!destination) {
    return <p>No destination data found. Please go back and try again.</p>;
  }

  return (
    <div className="container">
      <h1>{destination.locationName}</h1>
      <img src={destination.img} alt={destination.locationName} />
      <p>{destination.description}</p>
      <ul>
        <li>Price: {destination.price}</li>
        <li>Rating: {destination.rating}</li>
        <li>Duration: {destination.duration}</li>
        <li>Transport: {destination.transport}</li>
        <li>Best Time: {destination.bestTime}</li>
      </ul>
    </div>
  );
};

export default DestinationDetails;
