'use strict';
const express = require('express');
const PORT = require('./config').serverPort;

express()
  .use(require('body-parser').json())
  .use((req, res, next) => {console.log(`${req.method} request for ${req.url}`); next(); })
  .use(express.static('./'))
  .listen(PORT, () => console.log('server speaking on port '+PORT));
