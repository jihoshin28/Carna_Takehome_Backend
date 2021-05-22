const faker = require('faker')
const models = require('./models')

// let array 
// const getStudents = async() => {
//     // let array = []
//     let students = await models.Student.findAll({})

//     let studentIds = students.map(student => student.id)

//     for(let i = 0; i < teachers.length; i++){
//                 console.log(teachers[i])
//             }
//             const seedArray = []
//             for(let i = 0; i < 10; i++){
//                 let body = {}
//                 body['first_name'] = `${faker.name.firstName()}`
//                 body['last_name'] = `${faker.name.lastName()}`
//                 body['email'] = `${faker.internet.email()}`
//                 body['city'] = `${faker.address.city()}`
//                 body['state'] = `${faker.address.stateAbbr()}`
//                 body['password'] = `${faker.internet.password()}`
//                 // body['created_on'] = `${dateFormatter(date)}`
//                 seedArray.push(body)
//             }
//             return seedArray
// }
// getStudents()
// console.log(array)
// console.log(abc)
// for(let i = 0; i < result.)
// let students = new Promise 
let findStudents = models.Student.findAll({}).then((array) => {
     return array.map(value => value.id)
}).then((res) => {
    createStudents(res)
    // console.log(res)
})

// const createStudents = (array) => {
//     console.log(array)
// }

const createStudents = (studentIds) => {
    
    // for(let i = 0; i < students.length; i++){
    //     console.log(students[i])
    // }
    const seedArray = []
    for(let i = 0; i < 10; i++){
        let body = {}
        body['first_name'] = `${faker.name.firstName()}`
        body['last_name'] = `${faker.name.lastName()}`
        body['email'] = `${faker.internet.email()}`
        body['city'] = `${faker.address.city()}`
        body['state'] = `${faker.address.stateAbbr()}`
        body['password'] = `${faker.internet.password()}`
        body['student_id'] = studentIds[Math.floor(Math.random() * studentIds.length)];
        // body['created_on'] = `${dateFormatter(date)}`
        seedArray.push(body)
    }
    // console.log(seedArray)
    return seedArray
}


console.log(createStudents())