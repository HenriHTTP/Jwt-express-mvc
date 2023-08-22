const db = require('../databases/conn');

const users = db.sequelize.define('users', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = users;
