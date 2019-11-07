'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {}

  Restaurant.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true, }
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [2,2], },
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [5,10], }
    }
  }, {
    sequelize,
    modelName: 'restaurant'
  });

  Restaurant.associate = (models) => {
    models.Restaurant.belongsTo(models.User, { foreignKey: 'restaurantId'});
    models.Restaurant.hasMany(models.Food);
  }

  return Restaurant;
}