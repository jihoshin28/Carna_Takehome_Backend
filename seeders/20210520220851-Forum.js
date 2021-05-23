'use strict';
const faker = require('faker');
const models = require('../models')

const options = [
  {
    "type": "discuss",
    "image": "https://pragma.law/wp-content/uploads/2018/12/Meeting-500x500.jpg"
  },
  {
    "type": "Q&A",
    "image": "https://d1xh7laaiglxzi.cloudfront.net/web/f0b245af741bd7e73124bba41a52fda4/b5106567-5f1a-472e-bb34-cae533f0c710"
  },
  {
    "type": "public",
    "image": "https://newpublicsites.org/wp-content/uploads/2019/01/120815-London-Pedestrian-Scramble-500x500.jpg"
  },
]


const createForums  = (groupIds) => {
  const seedArray = []
  for(let i = 0; i < 10; i++){
    let option = options[Math.floor(Math.random() * options.length)];
    let body = {}
    body['name'] = `${faker.lorem.word()}`
    body['group_id'] = groupIds[Math.floor(Math.random() * groupIds.length)];
    body['type'] = option.type
    body['image'] = option.image
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
