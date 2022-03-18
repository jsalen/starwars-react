import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
