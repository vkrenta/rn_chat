import express, { json, urlencoded } from 'express';
import useRouter from './routes';
import './config';
import connectToMongo from './db';
// import { logReq, logRes, errorMiddleware } from './middlewares';
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
  app.listen(
    process.env.PORT,
    log.info({ label: 'Listening port', message: `${process.env.PORT}` })
  );
};

start();
