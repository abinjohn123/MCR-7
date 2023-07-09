import { useParams } from 'react-router';
import { continentsData } from '../constants';

const DestinationPage = () => {
  const { continentId, countryId, destinationId } = useParams();

  const destination = continentsData
    .find((continent) => continent.id === Number(continentId))
    ?.countries.find((country) => country.id === Number(countryId))
    ?.destinations.find(
      (destination) => destination.id === Number(destinationId)
    );

  console.log(destination.name);

  const {
    name,
    description,
    image,
    location,
    ratings,
    reviews,
    openingHours,
    ticketPrice,
    website,
  } = destination;

  return (
    <div className="destination-page">
      <h2>{name}</h2>
      <div className="split">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="details">
          <div className="row">
            <span className="highlight">Description: </span>
            <p className="content">{description}</p>
          </div>
          <div className="row">
            <span className="highlight">Ratings: </span>
            <p className="content">{ratings}</p>
          </div>
          <div className="row">
            <span className="highlight">Reviews: </span>
            <p className="content">{reviews}</p>
          </div>
          <div className="row">
            <span className="highlight">Location: </span>
            <p className="content">{location}</p>
          </div>
          <div className="row">
            <span className="highlight">Opening Hours: </span>
            <p className="content">{openingHours}</p>
          </div>
          <div className="row">
            <span className="highlight">Ticket Price: </span>
            <p className="content">{ticketPrice}</p>
          </div>
          <a href={website} target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
