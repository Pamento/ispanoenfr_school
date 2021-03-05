const express = require('express');
const router = express.Router();
const sendPDF = require('../controllers/public-files');
const winston = require('../config/winston');

/* GET hello word express/jade page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', appName: 'Cocorico-app' });
});

/* GET hello word express/jade page. */
router.get('/thum-x-Hr-07etalpmehtuizxOnE', function (req, res, next) {
  const tentos = {
    status: '...',
    title: '...',
    fName: 'Pino',
    lName: 'Opinel',
    email: 'pino@mail.eu',
    subject: 'The object of this message is: Success!',
    msg: "Bonjour, how are you ?"
  }

  try {
    res.render('temp-msg', {tento:tentos});
  } catch (e) {
    winston.error(e)
    res.status(400);
  }
});

router.get('/:file', sendPDF.sendPDF);

module.exports = router;
