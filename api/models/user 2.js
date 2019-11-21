'use strict'
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false,
      valiate: { isEmail: true, }
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.beforeSave((user, options) => {
    const saltRounds = 12;
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, saltRounds);
    }
  });

  User.associate = (models) => {
    models.User.hasMany(models.Restaurant);
  };

  return User;
}