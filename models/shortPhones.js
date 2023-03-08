'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShortPhones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/*models*/) {
      // define association here
    }
  }
  ShortPhones.init(
    {
      name: DataTypes.STRING,
      capacity: DataTypes.STRING,
      priceRegular: DataTypes.FLOAT,
      priceDiscount: DataTypes.FLOAT,
      image: DataTypes.STRING,
      screen: DataTypes.STRING,
      ram: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ShortPhones',
      createdAt: true,
      updatedAt: false,
    }
  );
  return ShortPhones;
};
