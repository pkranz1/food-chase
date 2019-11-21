'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {}

  Photo.init({
    url: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      validate: {
        len: [3, 1000],
        //isUrl: true \\may be used
      }
    },
  }, {
    sequelize,
    modelName: 'photo'
  });

  Photo.associate = (models) => {
    models.Photo.belongsTo(models.Food);
  }
  return Photo;
}