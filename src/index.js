const express = require('express');
const router = require('./routes');
const app = express();
const database = require('./db');

app.use(express.json());

app.use('/usuario', router);

database.sync()
.then(
  app.listen(3000)
)