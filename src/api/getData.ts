import apiClient from './config'

export default async function getData(location: string, page: number) {
  const checkLocation = location === '/' ? '/people' : location
  
  try {
    const response = await apiClient.get(`${checkLocation}/?page=${page}`)

    return response.data
  } catch (error) {
    console.log(error)
  }
}
