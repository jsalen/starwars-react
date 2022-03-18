import { useEffect, useReducer, useRef } from 'react'
import getData from '../api/getData'

interface State {
  data: SWResponse | undefined
  error: boolean
  loading: boolean
}

type Action =
  | { type: 'fetched'; payload: SWResponse }
  | { type: 'loading'; payload: boolean }
  | { type: 'error'; payload: boolean }

function useFetch(location: string, page: number): State {
  const cancelRequest = useRef<boolean>(false)
  const initialState: State = {
    error: false,
    data: undefined,
    loading: false,
  }

  const fetchReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, loading: action.payload }
      case 'fetched':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'loading', payload: true })

      try {
        const response = await getData(location, page)

        if (cancelRequest.current) return

        dispatch({ type: 'fetched', payload: response.data })
      } catch (error) {
        if (cancelRequest.current) return

        dispatch({ type: 'error', payload: true })
      }
    }

    void fetchData()

    return () => {
      cancelRequest.current = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, page])

  return state
}

export default useFetch
