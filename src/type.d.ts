interface People {
  name: string
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string
  films: array
  species: array
  starships: array
  vehicles: array
  url: string
  created: string
  edited: string
}

interface Films {
  title: string
  episode_id: integer
  opening_crawl: string
  director: string
  producer: string
  release_date: date
  species: array
  starships: array
  vehicles: array
  characters: array
  planets: array
  url: string
  created: string
  edited: string
}