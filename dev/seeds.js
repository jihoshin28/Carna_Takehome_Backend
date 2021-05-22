const pool = require('./pool')
const faker = require('faker')
const db = require('../queries')

var today = new Date();
const dateFormatter = (date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return mm + '/' + dd + '/' + yyyy
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// const createStudents = () => {
//     const seedArray = []
//     for(let i = 0; i < 10; i++){
//         let body = {}
//         let studentObject = {body}
//         body['first_name'] = `${faker.name.firstName()}`
//         body['last_name'] = `${faker.name.lastName()}`
//         body['email'] = `${faker.internet.email()}`
//         body['city'] = `${faker.address.city()}`
//         body['state'] = `${faker.address.stateAbbr()}`
//         body['password'] = `${faker.internet.password()}`
//         body['created_on'] = `${dateFormatter(date)}`
//         seedArray.push(studentObject)
//     }
    
//     for(let i = 0; i < seedArray.length; i++){
//         console.log(seedArray[i])
//         db.students.postStudent(seedArray[i], null)
//     }
// }

// const currentStudents = () => {
//     let result
//     pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
//         result = results.rows
//     })
//     return result
// }
// // console.log(currentStudents.map((student) => student.id))
// console.log(currentStudents())

// const createTeachers = () => {
//     const seedArray = []
//     for(let i = 0; i < 10; i++){
//         let body = {}
//         let teacherObject = {body}
//         body['first_name'] = `${faker.name.firstName()}`
//         body['last_name'] = `${faker.name.lastName()}`
//         body['email'] = `${faker.internet.email()}`
//         body['city'] = `${faker.address.city()}`
//         body['state'] = `${faker.address.stateAbbr()}`
//         body['password'] = `${faker.internet.password()}`
//         body['created_on'] = `${dateFormatter(today)}`
//         seedArray.push(teacherObject)
//     }
    
//     for(let i = 0; i < seedArray.length; i++){
//         console.log(seedArray[i])
//         db.teachers.postTeacher(seedArray[i], null)
//     }
// }

// const createGroups = () => {
//     const seedArray = []
//     for(let i = 0; i < 10; i++){
//         let body = {}
//         let groupObject = {body}
//         body['name'] = `${faker.lorem.word()}`
//         body['type'] = `${faker.lorem.word()}`
//         body['created_on'] = `${dateFormatter(today)}`
//         seedArray.push(groupObject)
//     }
    
//     for(let i = 0; i < seedArray.length; i++){
//         console.log(seedArray[i])
//         db.groups.postGroup(seedArray[i], null)
//     }
// }

const createCourses = () => {
    const seedArray = []
    for(let i = 0; i < 10; i++){
        let body = {}
        let courseObject = {body}
        body['teacher_id'] = getRandomInt(7, 54)
        body['subject'] = `${faker.lorem.word()}`
        body['start_date'] = `${dateFormatter(faker.date.past())}`
        body['end_date'] = `${dateFormatter(faker.date.future())}`
        body['created_on'] = `${dateFormatter(today)}`
        seedArray.push(courseObject)
    }
    
    for(let i = 0; i < seedArray.length; i++){
        console.log(seedArray[i])
        db.courses.postCourse(seedArray[i], null)
    }
}

// const createForums = () => {
//     const seedArray = []
//     for(let i = 0; i < 10; i++){
//         let body = {}
//         let forumObject = {body}
//         body['group_id'] = `${faker.name.firstName()}`
//         body['title'] = `${faker.lorem.words()}`
//         body['content'] = `${faker.lorem.paragraph()}`
//         body['created_on'] = `${dateFormatter(today)}`
//         seedArray.push(forumObject)
//     }
    
//     for(let i = 0; i < seedArray.length; i++){
//         console.log(seedArray[i])
//         db.forums.postForum(seedArray[i], null)
//     }
// }

// const createPosts = () => {
//     const seedArray = []
//     for(let i = 0; i < 10; i++){
//         let body = {}
//         let postObject = {body}
//         body['first_name'] = `${faker.name.firstName()}`
//         body['last_name'] = `${faker.name.lastName()}`
//         body['email'] = `${faker.internet.email()}`
//         body['city'] = `${faker.address.city()}`
//         body['state'] = `${faker.address.stateAbbr()}`
//         body['password'] = `${faker.internet.password()}`
//         body['created_on'] = `${dateFormatter(today)}`
//         seedArray.push(postObject)
//     }
    
//     for(let i = 0; i < seedArray.length; i++){
//         console.log(seedArray[i])
//         db.posts.postPost(seedArray[i], null)
//     }
// }



// createStudents()
// createTeachers()
// createGroups()
createCourses()
// createForums()
// createPosts()

