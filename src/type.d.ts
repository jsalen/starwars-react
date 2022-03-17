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

interface Planets {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: array
  films: array
  url: string
  created: string
  edited: string
}
