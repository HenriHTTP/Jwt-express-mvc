const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = session({
  name: 'session',
  secret: 'my_secret',
  resave: false,
  saveUninitialized: false,
  store: new FileStore({
    logFn: function () {},
    path: path.resolve(__dirname, '../session'),
  }),
  cookie: {
    secure: false,
    maxAge: 3600000,
    expires: new Date(Date.now() + 3600000),
    httpOnly: true,
  },
});

module.exports = sessionConfig;
