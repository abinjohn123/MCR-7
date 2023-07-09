import { useNavigate } from 'react-router';
import { LocationIcon } from '../constants';

const DestinationCard = ({ location }) => {
  const { name = '', image = null } = location;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`./${location.id}`);
  };

  return (
    <div className="location-card" onClick={handleNavigation}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="location">
        <LocationIcon /> <span>{name}</span>
      </div>
    </div>
  );
};

export default DestinationCard;
