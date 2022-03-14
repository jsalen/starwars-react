import { Route, Routes } from 'react-router-dom'
import { ListOfCharacters } from '../pages/ListOfCharacters'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ListOfCharacters />} />
    </Routes>
  )
}
