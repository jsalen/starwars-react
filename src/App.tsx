import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { ListOfCharacters } from './pages/ListOfCharacters'
import useFetch from './hooks/useFetch'
import { Pagination } from './components/Pagination'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const { characters, totalPages, loading, error } = useFetch(currentPage)

  const onPageChange = (page: number) => setCurrentPage(page)

  return (
    <>
      <Header quote="Cita de Star Wars..." />
      <Navigation />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <ListOfCharacters characters={characters} error={error} />
              }
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
