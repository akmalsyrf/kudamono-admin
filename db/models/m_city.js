'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class m_city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  m_city.init({
    name: DataTypes.STRING,
    prefecture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'm_city',
  });
  return m_city;
};