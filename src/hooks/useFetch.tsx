import { useState, useEffect } from 'react'
import getCharacters from '../api/getCharacters'

export default function useFetch(page: number) {
  const [characters, setCharacters] = useState<People[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCharacters(page)
      .then((data) => {
        setCharacters(data.results)
        setTotalPages(Math.ceil(data.count / 10))
        setLoading(false)
      })

      .catch((error) => {
        setError(error)
        setLoading(true)
      })
  }, [page])

  return { characters, totalPages, loading, error }
}
