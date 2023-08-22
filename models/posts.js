const db = require('../databases/conn');
const users = require('./users');

const posts = db.sequelize.define('posts', {
  title: {
    type: db.Sequelize.STRING,
    allowNull: false,
    require: true, // This should be "notEmpty: true" instead of "require: true"
  },
});

posts.belongsTo(users);
users.hasMany(posts);

module.exports = posts;
