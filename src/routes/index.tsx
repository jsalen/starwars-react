import { Route, Routes } from 'react-router-dom'
import { Films } from '../pages/Films'
import { People } from '../pages/People'
import { Planets } from '../pages/Planets'

interface Props {
  data: People[] | Films[] | any
  error: boolean
}

export const Routing = ({ data, error }: Props) => {
  return (
    <Routes>
      <Route path="/" element={<People characters={data} error={error} />} />
      <Route path="/films" element={<Films films={data} error={error} />} />
      <Route
        path="/planets"
        element={<Planets planets={data} error={error} />}
      />
    </Routes>
  )
}
