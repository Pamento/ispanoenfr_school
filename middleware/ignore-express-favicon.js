exports.ignoreFavicon = (req, res, next) => {
  // if (req.originalUrl.includes('favicon.ico')) {
  //   res.status(204).end()
  // }
  // if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
  //   return res.sendStatus(204);
  // }
  next();
}