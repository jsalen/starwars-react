import { NavLink } from 'react-router-dom'

import '../../styles/components/navigation.css'

interface Props {
  onPageChange: (page: number) => void
}

export const Navigation = ({ onPageChange }: Props) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/"
            className="navigation__link"
            onClick={() => onPageChange(1)}
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/films"
            className="navigation__link"
            onClick={() => onPageChange(1)}
          >
            Films
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/planets"
            className="navigation__link"
            onClick={() => onPageChange(1)}
          >
            Planets
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
