require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const logger = morgan(
  ':method : url :status :res[content-length] - :response-time ms',
);
const maintRouter = require('./src/routers/mainRouter');

const host = 'http://localhost:';
const port = 8000;
const corsOptions = {
  origin: [process.env.LOCAL, process.env.DEPLOY],
  allowedHeaders: ['x-access-token', 'content-type'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
};

server.use(cors(corsOptions));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(logger);
server.use(maintRouter);

server.listen(port, (req, res) => {
  console.log(`Server running at ${host}${port}`);
});
