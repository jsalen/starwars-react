import { Planet } from '../../components/Planet'

interface Props {
  planets: Planets[]
  error: boolean
}

export const Planets = ({ planets, error }: Props) => {
  return (
    <>
      {error && <div>Something went wrong</div>}
      {!error && planets.length === 0 && <div>No planets found</div>}
      {!error && planets.length > 0 && (
        <section className="list">
          <h2 className="list__title">List of Planets</h2>
          <section className="list__articles">
            {planets.length > 0 &&
              planets.map((planet: Planets) => (
                <Planet key={planet.name} planet={planet} />
              ))}
          </section>
        </section>
      )}
    </>
  )
}
