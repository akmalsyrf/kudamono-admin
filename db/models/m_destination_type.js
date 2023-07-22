'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class m_destination_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  m_destination_type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'm_destination_type',
  });
  return m_destination_type;
};