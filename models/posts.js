const db = require('../databases/conn');
const users = require('./users');

const posts = db.sequelize.define('posts', {
  title: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    require: true, // This should be "notEmpty: true" instead of "require: true"
  },
  userId: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
  },
});

posts.belongsTo(users, {
  foreignKey: 'userId',
  as: 'users', // Alias para a relação
});

// posts.belongsTo(users);
// users.hasMany(posts);

module.exports = posts;
