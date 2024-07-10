'use server'

import { IWeightData } from '@/app/globals'
import axios from 'axios'
import { ICurrentSplit } from '@/app/record/record'

export const getWeight = async () => {
  const { data } = await axios.get('/api/weight')
  return data as IWeightData[]
}

export const getCurrentSplit = async () => {
  const { data } = await axios.get('/api/splits/current')
  return data as ICurrentSplit
}
