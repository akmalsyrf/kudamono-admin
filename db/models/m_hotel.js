'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class m_hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  m_hotel.init({
    name: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    starAmount: DataTypes.INTEGER,
    pictureUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'm_hotel',
  });
  return m_hotel;
};