'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {}

  Food.init({
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    pickUp: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'food'
  });

  Food.associate = (models) => {
    models.Food.belongsTo(models.Restaurant);
    models.Food.hasOne(models.Photo);
  }
  return Food;
}