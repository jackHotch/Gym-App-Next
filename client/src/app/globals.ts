
export type FormEvent = React.FormEvent<HTMLFormElement>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>
export type TextInputChangeEvent = React.ChangeEvent<HTMLInputElement>
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>


export interface IWeightData {
  id: number,
  weight: number,
  date: string
}
