'use strict';
const models = require('../models')

const createStudentGroups  = (groupIds, studentIds) => {
  const seedArray = []
  for(let i = 0; i < 100; i++){
    let body = {}
      body['student_id'] = studentIds[Math.floor(Math.random() * studentIds.length)];
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
    await models.Student.findAll({})
    .then(async(res) => {
      let studentIds = res.map(data => data.id)
      await models.Group.findAll({})
      .then(res => {
        let groupIds = res.map(data => data.id)
        queryInterface.bulkInsert(
          'StudentGroups',
          createStudentGroups(groupIds, studentIds)
        )
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StudentGroups', null, {});
  }
};
