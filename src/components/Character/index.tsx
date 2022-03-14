import profilePic from '../../statics/images/default_pic.png'

import '../../styles/components/character.css'

interface Props {
  character: People
}

export const Character = ({ character }: Props) => {
  return (
    <article className="character">
      <header className={`character__header ${character.gender}`}>
        <img src={profilePic} alt={character.name} />
      </header>
      <div className="character__content">
        <h3>{character.name}</h3>
        <div className="character__description">
          <p>
            Height: <span>{character.height} cm</span>
          </p>
          <p>
            Weight: <span>{character.mass} kg</span>
          </p>
          <p>
            Gender: <span>{character.gender}</span>
          </p>
          <p>
            Eye Color: <span>{character.eye_color}</span>
          </p>
        </div>
      </div>
    </article>
  )
}
