const express = require('express');
const router = express.Router();

/* POST contact/message listing. */
router.post('/message', function (req, res, next) {
  // req.body:
  // {
  //   status: '',
  //   title: '',
  //   firstName: 'Pino',
  //   lastName: 'Opinel',
  //   email: 'name@eman.com',
  //   subject: '',
  //   message: "Bonjour, ...!"
  // }
  // next: check if each value is a string and send the email.
  
  console.dir(req.body);


  // res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({"success": "OK"}));
  // res.json({success: "OK"});
});

module.exports = router;
