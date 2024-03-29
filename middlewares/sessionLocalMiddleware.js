const sessionMiddleware = (req, res, next) => {
  res.locals.session = req.session;
  next();
};

module.exports = sessionMiddleware;
