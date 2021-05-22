'use strict';
const faker = require('faker')

const createGroups  = () => {
  const seedArray = []
  for(let i = 0; i < 10; i++){
    let body = {}
    body['name'] = `${faker.lorem.word()}`
    body['type'] = `${faker.animal.type()}`
    body['createdAt'] = new Date()
    body['updatedAt'] = new Date()
    seedArray.push(body)
  }
 console.log(seedArray)
 return seedArray
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Groups',
      createGroups()
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Groups', null, {});
  }
};
