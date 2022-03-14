import { NavLink } from 'react-router-dom'

import '../../styles/components/navigation.css'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/" className="navigation__link">
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/films" className="navigation__link">
            Films
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/planets" className="navigation__link">
            Planets
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/species" className="navigation__link">
            Species
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/starships" className="navigation__link">
            Starships
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/vehicles" className="navigation__link">
            Vehicles
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
