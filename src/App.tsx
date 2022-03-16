import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { Navigation } from './components/Navigation'
import { Pagination } from './components/Pagination'
import { ListOfCharacters } from './pages/ListOfCharacters'
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
              element={<ListOfCharacters characters={data} error={error} />}
            />
          </Routes>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </>
  )
}

export default App
