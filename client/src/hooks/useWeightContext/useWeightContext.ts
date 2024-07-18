import { IWeightContext } from '@/app/globals'
import { createContext, useContext, useState } from 'react'

export const WeightContext = createContext({} as IWeightContext)
export const WeightContextProvider = WeightContext.Provider

export const useWeightContext = () => {
  const wei = useContext(WeightContext)
  console.log(wei)
  return wei
}
