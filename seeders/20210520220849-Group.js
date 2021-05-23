'use strict';
const faker = require('faker')

const options = [
  {
    "type": "social",
    "image": "https://images.8tracks.com/cover/i/000/437/480/large__1_-8617.jpg?rect=0,125,500,500&q=98&fm=jpg&fit=max"
  },
  {
    "type": "class",
    "image": "https://i.pinimg.com/564x/a8/45/41/a845417dd26683319f49f097d34b56b6.jpg"
  },
  {
    "type": "interest",
    "image": "https://i1.wp.com/events.sustainablebrands.com/sb18vancouver/wp-content/uploads/2018/02/icon-idea-500x500.png?ssl=1"
  },
]

const createGroups  = () => {
  const seedArray = []
  for(let i = 0; i < 10; i++){
    let option = options[Math.floor(Math.random() * options.length)];
    let body = {}
    body['name'] = `${faker.lorem.word()}`
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
    queryInterface.bulkInsert(
      'Groups',
      createGroups()
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Groups', null, {});
  }
};
