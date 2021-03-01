const path = require('path');

exports.sendApp = (req, res) => {
  try {
    res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
      .sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  } catch (error) {
    res.status(400);
  }
}