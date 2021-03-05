const path = require('path');
const winston = require('../config/winston');

exports.sendApp = (req, res) => {
  try {
      res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  } catch (e) {
    winston.error(e)
    res.status(400);
  }
}