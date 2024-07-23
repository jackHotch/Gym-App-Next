'use server'

import { ICurrentSplit } from '@/app/record/record'
import axios from 'axios'

export const getCurrentSplit = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/splits/current`)
  return data as ICurrentSplit
}
