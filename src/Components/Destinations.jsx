import { useParams } from 'react-router';

import { continentsData } from '../constants';
import DestinationCard from './DestinationCard';

const Destinations = ({ type }) => {
  let iterableData = continentsData;
  let title = '';

  const { continentId, countryId } = useParams();

  if (countryId)
    iterableData = continentsData
      .find((continent) => continent.id === Number(continentId))
      ?.countries.find((country) => country.id === Number(countryId));
  else if (continentId)
    iterableData = continentsData.find(
      (continent) => continent.id === Number(continentId)
    );

  console.log(iterableData);

  switch (type) {
    case 'continents':
      title = 'Top continents for your next holiday';
      break;
    case 'countries':
      title = `Top countries in ${iterableData.name} for your next holiday`;
      break;
    case 'places':
      title = `Top places in ${iterableData.name} for your next holiday`;
      break;
    default:
      title = 'Top places to visit for your next holiday';
      break;
  }

  return (
    <>
      <h2 className="page-header">{title}</h2>
      <div className="location-container">
        {type === 'continents' &&
          iterableData.map((location) => (
            <DestinationCard location={location} key={location.id} />
          ))}
        {type === 'countries' &&
          iterableData.countries.map((location) => (
            <DestinationCard location={location} key={location.id} />
          ))}
        {type === 'places' &&
          iterableData.destinations.map((location) => (
            <DestinationCard location={location} key={location.id} />
          ))}
      </div>
    </>
  );
};

export default Destinations;
