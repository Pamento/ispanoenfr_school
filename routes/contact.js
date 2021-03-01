const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/contact');

/* POST contact/message listing. */
router.post('/message', sendEmail);

module.exports = router;
