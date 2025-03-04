import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { workoutRoutes } from './routes/workout';

export const app = new Hono();

// ログとCORSを設定
app.use('*', logger());
app.use('*', cors());

// ワークアウトルートを追加
app.route('/api/workouts', workoutRoutes);

app.get('/', (c) => {
  return c.json({ message: 'Workout Tracker API Server' });
});

// apiAppとしてもエクスポート
export const apiApp = app;

const apiRoute = app;
export type ApiRoute = typeof apiRoute;

// デフォルトエクスポートを追加
export default app;
