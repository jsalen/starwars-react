import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { Navigation } from './components/Navigation'
import { Pagination } from './components/Pagination'
import { Films } from './pages/Films'
import { People } from './pages/People'
import useFetch from './hooks/useFetch'

function App() {
  const { pathname } = useLocation()
  const [currentPage, setCurrentPage] = useState(1)
  const { data, totalPages, loading, error } = useFetch(pathname, currentPage)

  const onPageChange = (page: number) => setCurrentPage(page)

  return (
    <>
      <Header quote="Cita de Star Wars..." />
      <Navigation />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={<People characters={data} error={error} />}
            />
            <Route
              path="/films"
              element={<Films films={data} error={error} />}
            />
          </Routes>
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
  )
}

export default App
