import apiClient from './config'

export default async function getCharacters(page: number) {
  try {
    const response = await apiClient.get(`/people/?page=${page}`)

    return response.data
  } catch (error) {
    console.log(error)
  }
}
