'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Admins',
      [{
        username: 'admin',
        password: 'password',
        email: 'notarealemail@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  }
};
