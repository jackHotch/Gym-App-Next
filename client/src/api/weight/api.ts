'use server'

import { IWeightData } from '@/app/globals'
import axios from 'axios'

export const getWeight = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/weight`)
  return data as IWeightData[]
}
