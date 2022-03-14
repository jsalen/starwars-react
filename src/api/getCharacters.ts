import apiClient from './config'

export default async function getCharacters(){
  try {
    const response = await apiClient.get('/people')

    return response.data
  } catch (error) {
    console.log(error)
  }
}
