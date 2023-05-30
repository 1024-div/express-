var express = require('express');
var router = express.Router();
var db = require('../config/db')

/* GET users listing. */
router.get('/', function(req, res, next) {

  let data = db.query("select * from sys_user limit 10",[],(results, fields)=>{

    res.json(results);
  })
});

module.exports = router;
