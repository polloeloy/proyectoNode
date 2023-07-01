const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define('user', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  name: DataTypes.STRING,
  passwordHash: DataTypes.STRING,

});

module.exports = User;