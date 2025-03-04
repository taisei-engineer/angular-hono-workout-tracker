import { Hono } from 'hono';
import { Workout } from '../types/workuout';


const app = new Hono();

// GETリクエスト: すべてのワークアウトを取得
app.get('/', async (c) => {
  const workouts: Workout[] = [
    {
      id: '1',
      name: 'ベンチプレス',
      date: '2025-01-01',
      exercises: [{ name: 'ベンチプレス', sets: [{ weight: 100, reps: 10 }] }],
    },
    {
      id: '2',
      name: 'スクワット',
      date: '2025-01-02',
      exercises: [{ name: 'スクワット', sets: [{ weight: 100, reps: 10 }] }],
    },
  ];
  return c.json(workouts);
});

export const workoutRoutes = app;
