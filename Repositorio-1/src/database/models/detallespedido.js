'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetallesPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DetallesPedido.init({
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.DOUBLE,
    productosId: DataTypes.INTEGER,
    pedidosId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetallesPedido',
  });
  return DetallesPedido;
};