'use strict';
const faker = require('faker')
const createTeachers = () => {
  const seedArray = []
  for(let i = 0; i < 10; i++){
      let body = {}
      body['first_name'] = `${faker.name.firstName()}`
      body['last_name'] = `${faker.name.lastName()}`
      body['email'] = `${faker.internet.email()}`
      body['city'] = `${faker.address.city()}`
      body['state'] = `${faker.address.stateAbbr()}`
      body['password'] = `${faker.internet.password()}`
      body['createdAt'] = new Date()
      body['updatedAt'] = new Date()
      seedArray.push(body)
  }
  
  return seedArray
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Teachers',
      createTeachers()
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
