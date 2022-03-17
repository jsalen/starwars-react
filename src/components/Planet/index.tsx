import '../../styles/components/planet.css'
import { formatNumber, formatPopulation } from '../../utils'

interface Props {
  planet: Planets
}

export const Planet = ({ planet }: Props) => {
  return (
    <article className="planet">
      <header className="planet__header">
        <h2>{planet.name}</h2>
      </header>
      <section className="planet__info">
        <div className="planet__info-item">
          <span className="planet__info-label">Population:</span>
          <span className="planet__info-value">
            {formatPopulation(planet.population)}
          </span>
        </div>
        <div className="planet__info-item">
          <span className="planet__info-label">Rotation Period:</span>
          <span className="planet__info-value">
            {planet.rotation_period} hours
          </span>
        </div>
        <div className="planet__info-item">
          <span className="planet__info-label">Orbital Period:</span>
          <span className="planet__info-value">
            {planet.orbital_period} days
          </span>
        </div>
        <div className="planet__info-item">
          <span className="planet__info-label">Diameter:</span>
          <span className="planet__info-value">
            {formatNumber(planet.diameter)} km
          </span>
        </div>
        <div className="planet__info-item">
          <span className="planet__info-label">Climate:</span>
          <span className="planet__info-value">{planet.climate}</span>
        </div>
        <div className="planet__info-item">
          <span className="planet__info-label">Gravity:</span>
          <span className="planet__info-value">{planet.gravity}</span>
        </div>
      </section>
    </article>
  )
}
