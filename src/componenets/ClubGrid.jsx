import { Link } from 'react-router-dom';
import clubs from '../data/clubs';
import './ClubGrid.css';

function ClubGrid() {
  return (
    <div className="grid-container">
      {clubs.map((club) => (
        <Link to={club.path} className="club-card" key={club.name}>
          <img src={club.image} alt={club.name} />
          <div className="club-name">{club.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default ClubGrid;
