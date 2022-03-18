import { AxiosResponse } from 'axios'
import apiClient from './config'

export default async function getData(location: string, page: number) {
  const checkLocation = location === '/' ? '/people' : location

  try {
    const response: AxiosResponse = await apiClient.get(
      `${checkLocation}/?page=${page}`
    )

    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}
