'use server'

import axios from 'axios'
import { IWeightData } from '@/app/globals'
import { ICurrentSplit } from '@/app/record/record'

export const getWeight = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/weight`)
  return data as IWeightData[]
}

export const getCurrentSplit = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/splits/current`)
  return data as ICurrentSplit
}
