let express = require('express');
let router = express.Router();

var userSys = require('../service/userSys');

// login
router.post('/login',(req,res,next) => {
  let user = req.body.user || null;
  userSys.auth(user,result => res.json(result));
})

module.exports = router;