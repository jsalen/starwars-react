import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from '../components/Pagination'

describe('<Pagination />', () => {
  test('switching pages', () => {
    let currentPage = 1
    const totalPages = 9
    const onPageChange = jest.fn((page) => (currentPage = page))
    const { rerender } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    )

    expect(screen.getByText(currentPage)).toBeInTheDocument()
    expect(screen.getByText(currentPage + 1)).toBeInTheDocument()
    expect(screen.getByText(currentPage + 2)).toBeInTheDocument()
    expect(screen.getByText(totalPages)).toBeInTheDocument()

    fireEvent.click(screen.getByText(totalPages))

    expect(onPageChange.mock.calls.length).toBe(1)
    expect(onPageChange.mock.results[0].value).toBe(totalPages)

    rerender(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    )

    expect(screen.getByText(currentPage - 1)).toBeInTheDocument()
    expect(screen.getByText(currentPage - 2)).toBeInTheDocument()
    expect(screen.getByText(1)).toBeInTheDocument()

    fireEvent.click(screen.getByText('<'))

    expect(screen.getByText(1)).toBeInTheDocument()
    expect(screen.getByText(currentPage - 1)).toBeInTheDocument()
    expect(screen.getByText(currentPage)).toBeInTheDocument()
  })
})
