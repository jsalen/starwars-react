import { Character } from '../../components/Character'

import '../../styles/pages/list.css'

interface Props {
  characters: People[]
  error: boolean
}

export const People = ({ characters, error }: Props) => {
  return (
    <>
      {error && <div>Something went wrong</div>}
      {!error && characters.length === 0 && <div>No characters found</div>}
      {!error && characters.length > 0 && (
        <section className="list">
          <h2 className="list__title">List of Characters</h2>
          <section className="list__articles">
            {characters.length > 0 &&
              characters.map((character: People) => (
                <Character key={character.name} character={character} />
              ))}
          </section>
        </section>
      )}
    </>
  )
}
