import { Dispatch, SetStateAction } from 'react'
import { IWeightData } from '../globals'

export interface WeightListProps {
  weight: IWeightData[] | undefined
  hamburger: boolean[]
  setHamburger: Dispatch<SetStateAction<boolean[]>>
  refresh: () => void
}

export interface EntryModalProps {
  id: number
  change: () => void
}

export interface AddWeightModalProps {
  closeModal: () => void
  change: () => void
}
