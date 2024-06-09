import { Dispatch, SetStateAction } from "react";
import { IWeightData } from '../globals'

export interface IWeightList {
  weight: IWeightData[],
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

export interface IChart {
  weight: IWeightData[]
}
