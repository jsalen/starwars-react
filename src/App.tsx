import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Routing } from './routes'

function App() {
  return (
    <>
      <Header quote="Cita de Star Wars..." />
      <Navigation />
      <Routing />
    </>
  )
}

export default App
