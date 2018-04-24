const express = require('express');
const router = express.Router();

/*const app = express();*/

router.get('/', function (req, res, next) {
  //res.json("AshishkrGoyal");
  res.render('layout/main');
 // next();
});

module.exports = router;