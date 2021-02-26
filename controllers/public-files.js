const path = require('path');

exports.sendPDF = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '', 'Imagination.pdf'));
  } catch (e) {
    res.status(400);
  }
}