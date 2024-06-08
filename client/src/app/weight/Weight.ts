import { Dispatch, SetStateAction } from "react";
import { WeightData } from '../globals'

export interface IWeightList {
  weight: WeightData[],
  hamburger: boolean[],
  setHamburger: Dispatch<SetStateAction<boolean[]>>,
  setWeightChange: Dispatch<SetStateAction<boolean>>
}

export interface IEntryModal {
  id: number,
  change: Dispatch<SetStateAction<boolean>>,
  closeModal: (id: number) => void
}

export interface IAddWeightModal {
  closeModal: () => void,
  change: Dispatch<SetStateAction<boolean>>,
}