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
  openModal: Dispatch<SetStateAction<boolean>>
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
  setModal: Dispatch<SetStateAction<boolean>>
  setExercisesChanged: Dispatch<SetStateAction<boolean>>
}

type handleChange = (a: TextInputChangeEvent, b: number, c: number, d: string) => void

type removeSet = (a: number, b: number) => void

export interface SetProps {
  key: number
  value: ISet
  exerciseNumber: number
  setNumber: number
  handleChange: handleChange
  removeSet: removeSet
}

export interface ExerciseModalProps {
  hamburger: boolean[]
  setHamburger: Dispatch<SetStateAction<boolean[]>>
  ind: number
  displayNote: boolean[]
  setDisplayNote: Dispatch<SetStateAction<boolean[]>>
  exercises: IExercises[]
  setExercises: Dispatch<SetStateAction<IExercises[]>>
}

export interface WorkoutConfirmationModalProps {
  setConfirmationModal: Dispatch<SetStateAction<boolean>>
  handleSubmit: (e: ButtonEvent) => void
}
