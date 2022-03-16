import { useState, useEffect } from 'react'
import getData from '../api/getData'

export default function useFetch(location: string, page: number) {
  const [data, setData] = useState<People[] | any>([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getData(location, page)
      .then((response) => {
        setData(response.results)
        setTotalPages(Math.ceil(response.count / 10))
        setLoading(false)
      })

      .catch((error) => {
        setError(error)
        setLoading(true)
      })
  }, [location, page])

  return { data, totalPages, loading, error }
}
