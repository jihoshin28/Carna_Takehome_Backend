'use strict';
const faker = require('faker');
const models = require('../models')

const createForums  = (groupIds) => {
  const seedArray = []
  for(let i = 0; i < 10; i++){
    let body = {}
    body['name'] = `${faker.lorem.word()}`
    body['group_id'] = groupIds[Math.floor(Math.random() * groupIds.length)];
    body['createdAt'] = new Date()
    body['updatedAt'] = new Date()
    seedArray.push(body)
 }
 console.log(seedArray)
 return seedArray
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await models.Group.findAll({})
    .then(result => {
      let groupIds = result.map(data => data.id)
      console.log(groupIds)
      queryInterface.bulkInsert(
        'Forums',
        createForums(groupIds)
      )
    }).catch(error => {
      console.log(error)
    })  
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Forums', null, {});
  }
};
