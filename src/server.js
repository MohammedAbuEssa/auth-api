'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const authRoutes = require('../src/auth/routes.js');
const bearer = require('./auth/middleware/bearer.js');

const v1Routes = require('./routes/v1.js');
const v2Routes = require('./routes/v2.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(authRoutes);

app.get('/', (req,res)=>{
  res.send("server is running")
});
app.use('/api/v1',bearer, v1Routes);
app.use('/api/v2',bearer, v2Routes);

app.use(notFoundHandler);
app.use(errorHandler);

 function start(port) {
    app.listen(port, () => console.log(`Listening on ${port}`));

 }
module.exports = {
  server: app,
  start:start ,
};
