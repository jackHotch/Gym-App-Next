import { Dispatch, SetStateAction } from "react";
import { IExercises, IAllExercises } from "./record/record"
import { Dayjs } from "dayjs";

export type FormEvent = React.FormEvent<HTMLFormElement>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>
export type DivEvent = React.MouseEvent<HTMLDivElement>
export type TextInputChangeEvent = React.ChangeEvent<HTMLInputElement>
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>


export interface IWeightData {
  id:     number,
  weight: number,
  date:   string
}

export interface ChartProps {
  weight: IWeightData[] | undefined
}

export interface SearchbarProps {
  placeholder:    string,
  data:           IAllExercises[],
  newExercise:    IExercises[],
  setNewExercise: Dispatch<SetStateAction<IExercises[]>>
}

type convertDate = (a: Date | Dayjs) => string

export interface DatePickerProps {
  convertDate: convertDate
  date: any
  setDate: Dispatch<SetStateAction<any>>
  sxDateInput?: Object
  sxCalendarBackground?: Object
}

export interface RangeButtonProps {
  toggle: () => void
  selection: string
  sxContainer?: Object
}

export interface RangeListProps {
  setSelection: Dispatch<SetStateAction<string>>
  close: () => void
}

export interface DateRangePickerProps {
  sxContainer?: Object
}

export interface IWeightContext {
  weightRangeData: IWeightData[]
  setWeightRangeData: Dispatch<SetStateAction<IWeightData[]>>
  startDate: any
  setStartDate: Dispatch<SetStateAction<any>>
  endDate: any
  setEndDate: Dispatch<SetStateAction<any>>
}