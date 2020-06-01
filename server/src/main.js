/* eslint-disable no-shadow */
import express, { json, urlencoded } from 'express';
import socket from 'socket.io';
import http from 'http';
import useRouter from './routes';
import './config';
import connectToMongo from './db';
import log from './helpers/log';
import { logReq, logRes } from './middlewares/log.middleware';
import errorMiddleware from './middlewares/error.middleware';

process.on('uncaughtException', (e) =>
  log.error({ label: e.name, message: e.message })
);
process.on('unhandledRejection', (e) =>
  log.error({ label: e.name, message: e.message })
);

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    log.info(message);
    io.emit('message', message);
  });
});

app.use(json({ extended: true }));
app.use(urlencoded({ extended: true }));

// Middleware stage
app.use(logReq);
app.use(logRes);
useRouter(app);
app.use(errorMiddleware);

// Final stage
const start = async () => {
  await connectToMongo();
  server.listen(
    process.env.PORT,
    log.info({ label: 'Listening port', message: `${process.env.PORT}` })
  );
};

start();
