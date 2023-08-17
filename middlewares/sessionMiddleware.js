const sessionMiddleware = (req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
};

module.exports = sessionMiddleware;
