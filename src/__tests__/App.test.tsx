import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
  test('App renders and navigates', () => {
    render(<App />, { wrapper: MemoryRouter })

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
