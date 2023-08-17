//imports
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

//dotenv path
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// connection database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
  },
);

//confirme connetion to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

//export default modules js
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
