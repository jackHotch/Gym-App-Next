import { Dispatch, SetStateAction } from 'react'
import { ButtonEvent, TextInputChangeEvent } from '../globals'

export interface ICurrentSplit {
  name: string
}

export interface IExercises {
  name: string
  notes: string
  sets: ISet[]
}

export interface ISet {
  weight: string
  reps: string
  rpe: string
}

export interface AddExerciseModalProps {
  closeModal: () => void
  exercises: IExercises[]
  setExercises: Dispatch<SetStateAction<IExercises[]>>
}

export interface IAllExercises {
  id: number
  name: string
  icon: null
  created_at: Date
}

export interface CreateNewExerciseModalProps {
  closeModal: () => void
  setExercisesChanged: Dispatch<SetStateAction<boolean>>
}

type ThandleChange = (a: TextInputChangeEvent, b: number, c: number, d: string) => void

type TremoveSet = (a: number, b: number) => void

export interface SetProps {
  key: number
  value: ISet
  exerciseNumber: number
  setNumber: number
  handleChange: ThandleChange
  removeSet: TremoveSet
}

export interface ExerciseModalProps {
  showExerciseModal: boolean
  toggleExerciseModal: (i: number) => void
  ind: number
  showNote: boolean
  toggleNote: (i: number) => void
  exercises: IExercises[]
  setExercises: Dispatch<SetStateAction<IExercises[]>>
}

export interface WorkoutConfirmationModalProps {
  closeConfirmationModal: () =>  void
  handleSubmit: (e: ButtonEvent) => void
}
