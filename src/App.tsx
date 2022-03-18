import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { Navigation } from './components/Navigation'
import { Pagination } from './components/Pagination'
import { Routing } from './routes'
import useFetch from './hooks/useFetch'

function App() {
  const { pathname } = useLocation()
  const [currentPage, setCurrentPage] = useState(1)
  const { data, loading, error } = useFetch(pathname, currentPage)
  const { results, count } = data || {}
  const totalPages = Math.ceil(count / 10)

  const onPageChange = (page: number) => setCurrentPage(page)

  return (
    <>
      <Header quote={'Cita de Star Wars...'} />
      <Navigation />
      {loading ? (
        <Loader />
      ) : (
        <>
          {!loading && data && (
            <>
              <Routing data={results} error={error} />
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default App
