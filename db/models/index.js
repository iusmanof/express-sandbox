'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const book = require('./books');

let sequelize;
if (config.use_env_variable) {
  console.log(config)
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelExports = [
  book,
];

modelExports.forEach((exportedModel) => {
  const model = exportedModel(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

modelExports.forEach(exportedModel => {
    const model = exportedModel(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;