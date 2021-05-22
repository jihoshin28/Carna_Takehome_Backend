'use strict';
const faker = require('faker')
const models = require('../models')

const createPosts  = (forumIds, studentIds) => {
  const seedArray = []
  for(let i = 0; i < 50; i++){
    let body = {}
      body['student_id'] = studentIds[Math.floor(Math.random() * studentIds.length)];
      body['forum_id'] = forumIds[Math.floor(Math.random() * forumIds.length)];
      body['title'] = `${faker.lorem.word()}`
      body['content'] = `${faker.lorem.paragraph()}`
      body['createdAt'] = new Date()
      body['updatedAt'] = new Date()
      seedArray.push(body)
 }
 console.log(seedArray)
 return seedArray
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await models.Student.findAll({})
    .then(async (res) => {
      let studentIds = res.map(data => data.id)
      await models.Forum.findAll({})
      .then(res => {
        let forumIds = res.map(data => data.id)
        queryInterface.bulkInsert(
          'Posts',
          createPosts(forumIds, studentIds)
        )
      })
      console.log(studentIds)
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
