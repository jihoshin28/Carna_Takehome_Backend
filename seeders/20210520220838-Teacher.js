'use strict';
const faker = require('faker')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Teachers',
      [
        
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
