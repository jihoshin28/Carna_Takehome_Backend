'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsToMany(models.Student, {
        through: 'StudentGroup',
        as: 'students',
        foreignKey: 'group_id',
        onDelete: 'cascade',
        hooks: true,
      });
      // Group.hasMany(models.StudentGroup, {
      //   foreignKey: 'group_id',
      //   onDelete: 'cascade',
      //   hooks: true,
      // });
    }
  };
  Group.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};