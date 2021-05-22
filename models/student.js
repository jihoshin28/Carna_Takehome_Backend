'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Group, {
        through: 'StudentGroup',
        as: 'groups',
        foreignKey: 'student_id'
      });
      Student.belongsToMany(models.Course, {
        through: 'StudentCourse',
        as: 'courses',
        foreignKey: 'student_id'
      });
      Student.hasMany(models.Post, {
        foreignKey: 'student_id',
        as: 'posts'
      })
    }
  };
  Student.init({
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};