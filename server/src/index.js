const express = require('express');
const useRouter = require('./routes');
require('./config');
const { log } = require('./helpers');
const connectToMongo = require('./db');

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Middleware stage
useRouter(app);

// Final stage
const start = async () => {
  await connectToMongo();
  app.listen(
    process.env.PORT,
    log.info({ label: 'Listening port', message: `${process.env.PORT}` })
  );
};

start();
