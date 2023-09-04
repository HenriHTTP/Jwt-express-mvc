// athenticantion routes
const session = require('express-session');
const athenticantionRoutes = async (req, res, next) => {
  if (!req.session.userid) {
    res.redirect('/login');
  }
  next();
};

module.exports = athenticantionRoutes;
