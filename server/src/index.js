const express = require('express');
const useRouter = require('./routes');
require('./config');
const { log } = require('./helpers');
const connectToMongo = require('./db');
const { logReq, logRes, errorMiddleware } = require('./middlewares');

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

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
