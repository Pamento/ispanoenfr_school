const express = require('express');
const router = express.Router();
const sendPDF = require('../controllers/public-files');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', appName: 'Cocorico-app' });
});

router.get('/:file', sendPDF.sendPDF)

module.exports = router;
