'use strict';
const faker = require('faker')
const models = require('../models')

//get random id
//studentIds[Math.floor(Math.random() * studentIds.length)];

const createCourses  = (teacherIds) => {
  const seedArray = []
  for(let i = 0; i < 10; i++){
    let body = {}
      body['teacher_id'] = teacherIds[Math.floor(Math.random() * teacherIds.length)];
      body['subject'] = `${faker.animal.type()}`
      body['createdAt'] = new Date()
      body['updatedAt'] = new Date()
      seedArray.push(body)
 }
 console.log(seedArray)
 return seedArray
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await models.Teacher.findAll({})
    .then(result =>  {
      let teacherIds = result.map(data => data.id)
      queryInterface.bulkInsert(
        'Courses', 
        createCourses(teacherIds)
      )
    }).catch(error => {
      console.log(error)
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
