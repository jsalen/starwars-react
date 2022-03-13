import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/films" className="navigation__link">
            Films
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/planets" className="navigation__link">
            Planets
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/species" className="navigation__link">
            Species
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/starships" className="navigation__link">
            Starships
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/vehicles" className="navigation__link">
            Vehicles
          </Link>
        </li>
      </ul>
    </nav>
  )
}
