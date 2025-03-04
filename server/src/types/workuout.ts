// 型定義
export interface Workout {
  id: string;
  name: string;
  date: string;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: Set[];
}

export interface Set {
  weight: number;
  reps: number;
}
