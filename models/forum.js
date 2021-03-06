'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Forum.hasMany(models.Post, {
        as: 'posts',
        foreignKey: 'forum_id',
        onDelete: 'cascade',
        hooks: true,
      })
    }
  };
  Forum.init({
    group_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};