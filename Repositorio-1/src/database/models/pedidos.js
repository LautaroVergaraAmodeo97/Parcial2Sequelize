'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pedidos.init({
    numero: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    estadosId: DataTypes.INTEGER,
    pagosId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};