const path = require('path');

exports.sendApp = (req,res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
}