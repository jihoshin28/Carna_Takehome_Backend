'use strict';
const faker = require('faker')

const createStudents = () => {
    const seedArray = []
    for(let i = 0; i < 30; i++){
        let body = {}
        body['first_name'] = `${faker.name.firstName()}`
        body['last_name'] = `${faker.name.lastName()}`
        body['email'] = `${faker.internet.email()}`
        body['city'] = `${faker.address.city()}`
        body['state'] = `${faker.address.stateAbbr()}`
        body['image'] = `${faker.image.avatar()}`
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
      'Students', 
      createStudents()
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
