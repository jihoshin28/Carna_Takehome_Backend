'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudentGroup.init({
    group_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentGroup',
  });
  return StudentGroup;
};