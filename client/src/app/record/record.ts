export interface ICurrentSplit {
  name: string
}

export interface IExercises {
  name:  string;
  notes: string;
  sets:  Set[];
}

export interface Set {
  weight: string;
  reps:   string;
  rpe:    string;
}
