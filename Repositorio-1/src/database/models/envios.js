'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Envios.init({
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    precio: DataTypes.STRING,
    pedidosId: DataTypes.INTEGER,
    pagosId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Envios',
  });
  return Envios;
};