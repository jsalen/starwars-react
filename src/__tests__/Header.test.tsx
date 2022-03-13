import { render, screen } from '@testing-library/react'
import { Header } from '../components/Header/index'

describe('<Header />', () => {
  test('renders content without crashing', () => {
    render(<Header />)

    expect(screen.getByText('Star Wars')).toBeInTheDocument()
  })

  test('renders a quote', () => {
    const quote = 'Testing quote'

    render(<Header quote={quote} />)

    expect(screen.getByText(quote)).toBeInTheDocument()
  })
})
