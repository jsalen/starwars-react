import { Film } from '../../components/Film'

interface Props {
  films: Films[]
  error: boolean
}

export const Films = ({ films, error }: Props) => {
  return (
    <>
      {error && <div>Something went wrong</div>}
      {!error && films.length === 0 && <div>No films found</div>}
      {!error && films.length > 0 && (
        <section className="list">
          <h2 className="list__title">List of Films</h2>
          <section className="list__articles">
            {films.length > 0 &&
              films.map((film: Films) => <Film key={film.title} film={film} />)}
          </section>
        </section>
      )}
    </>
  )
}
