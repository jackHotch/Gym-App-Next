import { Dispatch, SetStateAction } from 'react'
import { IExercises, IAllExercises } from './record/record'

export type FormEvent = React.FormEvent<HTMLFormElement>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>
export type DivEvent = React.MouseEvent<HTMLDivElement>
export type TextInputChangeEvent = React.ChangeEvent<HTMLInputElement>
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>

export interface IWeightData {
  id: number
  weight: number
  date: string
}

export interface ChartProps {
  weight: IWeightData[] | undefined
}

export interface SearchbarProps {
  placeholder: string
  data: IAllExercises[]
  newExercise: IExercises[]
  setNewExercise: Dispatch<SetStateAction<IExercises[]>>
}

export interface IWeightEntry {
  weight: string
  date: string
}
