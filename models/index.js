const dbConfig = require("../db_resources/db.config");

const Sequelize = require("sequelize");
const sequelizeInstanceDB = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

// le estamos pasando al sequelize que tenemos arrba
db.Sequelize = Sequelize;
db.sequelizeInstanceDB = sequelizeInstanceDB;

//Cuando pongo parentesis ejecuto como funcion con parametros  sequelize es la instacia para acceder
//a la base de dato y la mal¿yuscula la instancia para hacer transacciones
db.Subject = require("./subject.model.js")(sequelizeInstanceDB, Sequelize);

module.exports = db;
