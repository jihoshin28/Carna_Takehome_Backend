'use strict';
const faker = require('faker')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Courses',
      [
        
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
