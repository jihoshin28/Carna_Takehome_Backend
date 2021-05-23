'use strict';
const faker = require('faker')
const models = require('../models')

//get random id
//studentIds[Math.floor(Math.random() * studentIds.length)];

const options = [
  {
    "subject": "math",
    "image": "https://cdn.wallpapersafari.com/3/92/y6NZcD.jpg"
  },
  {
    "subject": "english",
    "image": "https://younglifeperception.files.wordpress.com/2012/10/magic-book-500x500.jpg"
  },
  {
    "subject": "history",
    "image": "https://images.squarespace-cdn.com/content/v1/59fbe1038c56a8a192793e4f/1607571609812-WHHJI1XO5QF1XOX2Q8E7/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image1+%282%29.jpeg?format=500w"
  },
  {
    "subject": "biology",
    "image": "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Afab97a0b36150d3e835c228b94564156b7cc9f5e5d879d2444c2d465%2BCOVER_PAGE_THUMB_POSTCARD_TINY%2BCOVER_PAGE_THUMB_POSTCARD_TINY.1"
  },
  {
    "subject": "programming",
    "image": "https://cdn-0.studybreaks.com/wp-content/uploads/2019/02/computer-1209641_1280-500x500.jpg"
  },
  {
    "subject": "physics",
    "image": "http://thestevenobleshow.com/wp-content/uploads/2019/03/physics-chalkboard_cropped-500x500.jpg"
  }
]

const createCourses  = (teacherIds) => {
  const seedArray = []
  for(let i = 0; i < 10; i++){
    let option = options[Math.floor(Math.random() * options.length)];
    let body = {}
      body['teacher_id'] = teacherIds[Math.floor(Math.random() * teacherIds.length)];
      body['subject'] = option.subject
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
