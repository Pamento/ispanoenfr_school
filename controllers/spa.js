const path = require('path');

exports.sendApp = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  } catch (error) {
    res.status(400);
  }
}