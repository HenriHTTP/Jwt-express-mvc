const db = require('../databases/conn');
const User = require('./users');
const Post = require('./posts');

db.sequelize
  .sync({ force: true }) // Somente para fins de desenvolvimento, remover em produção
  .then(() => {
    console.log('Banco de dados sincronizado.');
  })
  .catch((err) => {
    console.error('Erro na sincronização do banco de dados:', err);
  });
