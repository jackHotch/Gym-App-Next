'use server'

import axios from 'axios'

const URL = process.env.URL

export const getWorkoutNumber = async () => {
  const { data } = await axios.get(`${URL}/api/workout/number`)
  return data as number
}
