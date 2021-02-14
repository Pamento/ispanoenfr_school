const path = require('path');

exports.sendPDF = (req,res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, '', 'Imagination.pdf'));
}