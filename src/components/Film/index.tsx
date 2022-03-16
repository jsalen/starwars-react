import '../../styles/components/film.css'

interface Props {
  film: Films
}

export const Film = ({ film }: Props) => {
  return (
    <article className="film">
      <header className="film__title">
        <h2>Star Wars: {film.title}</h2>
      </header>
      <section className="film__description">
        <p className="line-clamp">{film.opening_crawl}</p>
      </section>
      <footer className="film__footer">
        <span>{film.release_date}</span>
        <p>Directed by: {film.director}</p>
      </footer>
    </article>
  )
}
