import { Character } from '../../components/Character'
import useFetchPeople from '../../hooks/useFetchPeople'

import '../../styles/pages/list-of-characters.css'

export const ListOfCharacters = () => {
  const { characters, loading, error } = useFetchPeople()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <section className="list">
      <h2>List of Characters</h2>
      <ul>
        {characters.length > 0 &&
          characters.map((character: People) => (
            <Character key={character.name} character={character} />
          ))}
      </ul>
    </section>
  )
}
