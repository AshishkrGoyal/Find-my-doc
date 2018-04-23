const express = require('express');
const router = express.Router();

/*const app = express();*/

router.get('/local', function (req, res, next) {
  res.json("AshishkrGoyal");
  next();
})