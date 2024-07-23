import { Dispatch, SetStateAction } from "react";
import { IWeightData } from '../globals'

export interface WeightListProps {
  weight: IWeightData[],
  setWeightChange: Dispatch<SetStateAction<boolean>>
}

export interface EntryModalProps {
  id: number,
  change: Dispatch<SetStateAction<boolean>>,
  closeModal: (id: number) => void
}

export interface AddWeightModalProps {
  closeModal: () => void,
  change: Dispatch<SetStateAction<boolean>>,
}
