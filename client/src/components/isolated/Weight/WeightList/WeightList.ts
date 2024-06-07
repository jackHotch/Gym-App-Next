import { Dispatch, SetStateAction } from "react";
import { WeightData } from '../../../../app/globals'

export interface WeightListProps {
  weight: WeightData[],
  hamburger: boolean[],
  setHamburger: Dispatch<SetStateAction<boolean[]>>,
  setWeightChange: Dispatch<SetStateAction<boolean>>
}