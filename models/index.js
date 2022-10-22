const dbConfig = require("../config/db.config");


const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

//notre base de données
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Definir les tables de la base de données
db.livres = require("./livre.model")(sequelize, Sequelize);
db.auteurs = require("./auteur.model")(sequelize, Sequelize);

db.auteurs.hasMany(db.livres, {foreignKey: 'auteurID', as: 'livres',onDelete: 'cascade'});
db.livres.belongsTo(db.auteurs,{foreignKey: 'auteurID', as: 'auteur'});
module.exports = db;