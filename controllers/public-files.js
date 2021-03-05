const path = require('path');
const winston = require('../config/winston');

exports.sendPDF = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '', 'Imagination.pdf'));
  } catch (e) {
    winston.error(e);
    res.status(400);
  }
}