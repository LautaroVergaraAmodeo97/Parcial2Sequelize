'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    descipcion: DataTypes.STRING,
    marcasid: DataTypes.INTEGER,
    categoriasid: DataTypes.INTEGER,
    imagenesid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};