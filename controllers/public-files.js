const path = require('path');
const winston = require('../config/winston');

exports.sendPDF = (req, res) => {
  console.log(':file::req:__');
  console.log(req);
  try {
    res.sendFile(path.join(__dirname, '', 'Imagination.pdf'));
  } catch (e) {
    winston.error(e);
    res.status(400);
  }
}