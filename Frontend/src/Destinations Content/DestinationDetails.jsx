import { useLocation } from "react-router-dom";
import Footer from "../components/Footers";

const DestinationDetails = () => {
  const location = useLocation();
  const { destination } = location.state || {};

  if (!destination) {
    return (
      <p className="mt-14 text-error text-lg">
        No destination data found. Please go back and try again.
      </p>
    );
  }

  return (
    <>
      <main className="min-h-screen flex flex-col  dark:bg-bg-surface text-surface dark:text-text-surface">
        {/* Image with responsive aspect ratio */}
        <section className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aspect ratio box - 16:9 */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <img
              src={destination.img}
              alt={destination.locationName}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-md"></div>
            <h1 className="absolute bottom-4 left-4 md:left-8 text-light text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg max-w-xl">
              {destination.locationName}
            </h1>
          </div>
        </section>

        {/* Content section */}
        <section className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          <p className="mb-8 text-base sm:text-lg leading-relaxed  text-dark dark:text-text-light">
            {destination.description} Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. At libero reiciendis neque, ipsam quasi similique
            architecto. Tempore molestiae expedita consequatur error ducimus
            sunt architecto velit eveniet quibusdam! Autem, quod exercitationem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            corporis, quod sint natus impedit repudiandae dolor autem enim ipsum
            nobis, aliquam fugit sequi accusantium eaque quaerat nesciunt?
            Maxime, libero similique. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam deserunt, cumque nihil molestias aliquam
            sequi voluptate, ut optio id dolorem velit ea rerum magni quod porro
            pariatur et nobis odio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur, libero, quos, quo at esse numquam
            unde veniam sequi et magni dolorem cum! Perspiciatis eveniet ducimus
            debitis distinctio est, iste velit.
          </p>

          <div className="bg-surface dark:bg-bg-surface rounded-lg shadow-md p-6 sm:p-8">
            <ul className="space-y-4 text-surface dark:text-text-surface text-base sm:text-lg font-semibold">
              <li>
                <span className="text-primary font-semibold">Price:</span>{" "}
                {destination.price}
              </li>
              <li>
                <span className="text-primary font-semibold">Rating:</span>{" "}
                {destination.rating} ⭐
              </li>
              <li>
                <span className="text-primary font-semibold">Duration:</span>{" "}
                {destination.duration}
              </li>
              <li>
                <span className="text-primary font-semibold">Transport:</span>{" "}
                {destination.transport}
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Best Time to Visit:
                </span>{" "}
                {destination.bestTime}
              </li>
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default DestinationDetails;
