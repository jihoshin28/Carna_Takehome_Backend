'use strict';
const models = require('../models')

const createStudentCourses  = (courseIds, studentIds) => {
  const seedArray = []
  for(let i = 0; i < 100; i++){
    let body = {}
      body['student_id'] = studentIds[Math.floor(Math.random() * studentIds.length)];
      body['course_id'] = courseIds[Math.floor(Math.random() * courseIds.length)];
      body['completion'] = Math.floor(Math.random() * 100)
      body['score'] = Math.floor(Math.random() * 100)
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
    .then(async(res) => {
      let studentIds = res.map(data => data.id)
      await models.Course.findAll({})
      .then(res => {
        let courseIds = res.map(data => data.id)
        queryInterface.bulkInsert(
          'StudentCourses',
          createStudentCourses(courseIds, studentIds)
        )
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StudentCourses', null, {});
  }
};
