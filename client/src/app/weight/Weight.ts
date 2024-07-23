import { Dispatch, SetStateAction } from 'react'
import { IWeightData } from '../globals'

export interface WeightListProps {
  weight: IWeightData[] | undefined
  refresh: () => void
}

export interface EntryModalProps {
  id: number
  change: () => void
  closeModal: (id: number) => void
}

export interface AddWeightModalProps {
  closeModal: () => void
  change: () => void
}
