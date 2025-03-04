import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { apiApp } from '../server/src/index';
import { Hono } from 'hono';

const angularApp = new AngularAppEngine();

export const reqHandler = createRequestHandler(async (req) => {
  const url = new URL(req.url);
  console.log('render SSR', url.href);

  // '/api'で始まるAPIリクエストはHonoで処理
  if (url.pathname.startsWith('/api')) {
    const app = new Hono().route('/api', apiApp);
    console.log('Hono app', app);
    return await app.fetch(req, { path: url.pathname });
  }

  // APIリクエスト以外は Angular で処理
  const res = await angularApp.handle(req);
  return res ?? new Response('Page not found.', { status: 404 });
});
