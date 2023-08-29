// athenticantion routes
const session = require('express-session');
const athenticantionRoutes = async (req, res, next) => {
  if (!req.session.userid) {
    console.log('not seession found');
    return;
  }
  next();
};

module.exports = athenticantionRoutes;
