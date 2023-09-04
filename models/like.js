const db = require('../databases/conn');
const posts = require('./posts');
const users = require('./users');

const likes = db.sequelize.define('likes', {
  userId: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
  },

  // post_id é uma chave estrangeira referenciando Post
  postId: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
  },
});

likes.belongsTo(users, {
  foreignKey: 'userId',
  as: 'users', // Alias para a relação
});

likes.belongsTo(posts, {
  foreignKey: 'postId',
  as: 'posts', // Alias para a relação
});

module.exports = likes;
