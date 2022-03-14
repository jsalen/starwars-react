import { useState, useEffect } from 'react'
import getCharacters from '../api/getCharacters'

export default function useFetchPeople() {
  const [characters, setCharacters] = useState<People[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getCharacters()
      .then((data) => {
        setCharacters(data.results)
        setLoading(false)
      })

      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return { characters, loading, error }
}
