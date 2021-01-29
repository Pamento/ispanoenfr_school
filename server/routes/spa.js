var express = require('express');
var router = express.Router();
const clientApp = require('../controllers/spa')

/* GET home page. */
router.get('/', clientApp.sendApp);

module.exports = router;