const pool = require('./pool')
const faker = require('faker')
const db = require('../../../queries')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

let todaysDate = mm + '/' + dd + '/' + yyyy

const createStudents = () => {
    const seedArray = []
    for(let i = 0; i < 10; i++){
        let body = {}
        let studentObject = {body}
        body['first_name'] = `${faker.name.firstName()}`
        body['last_name'] = `${faker.name.lastName()}`
        body['email'] = `${faker.internet.email()}`
        body['city'] = `${faker.address.city()}`
        body['state'] = `${faker.address.stateAbbr()}`
        body['password'] = `${faker.internet.password()}`
        body['created_on'] = `${todaysDate}`
        seedArray.push(studentObject)
    }
    
    for(let i = 0; i < seedArray.length; i++){
        console.log(seedArray[i])
        db.students.postStudent(seedArray[i], 200)
    }
}

const createStudents = () => {
    const seedArray = []
    for(let i = 0; i < 10; i++){
        let body = {}
        let studentObject = {body}
        body['first_name'] = `${faker.name.firstName()}`
        body['last_name'] = `${faker.name.lastName()}`
        body['email'] = `${faker.internet.email()}`
        body['city'] = `${faker.address.city()}`
        body['state'] = `${faker.address.stateAbbr()}`
        body['password'] = `${faker.internet.password()}`
        body['created_on'] = `${todaysDate}`
        seedArray.push(studentObject)
    }
    
    for(let i = 0; i < seedArray.length; i++){
        console.log(seedArray[i])
        db.students.postStudent(seedArray[i], 200)
    }
}

const createStudents = () => {
    const seedArray = []
    for(let i = 0; i < 10; i++){
        let body = {}
        let studentObject = {body}
        body['first_name'] = `${faker.name.firstName()}`
        body['last_name'] = `${faker.name.lastName()}`
        body['email'] = `${faker.internet.email()}`
        body['city'] = `${faker.address.city()}`
        body['state'] = `${faker.address.stateAbbr()}`
        body['password'] = `${faker.internet.password()}`
        body['created_on'] = `${todaysDate}`
        seedArray.push(studentObject)
    }
    
    for(let i = 0; i < seedArray.length; i++){
        console.log(seedArray[i])
        db.students.postStudent(seedArray[i], 200)
    }
}



createStudents()

// CREATE TABLE IF NOT EXISTS students
//     (id SERIAL PRIMARY KEY, 
//     email VARCHAR(100) UNIQUE NOT NULL, 
//     first_name VARCHAR(100), 
//     last_name VARCHAR(100), 
//     birthday DATE, 
//     city VARCHAR(30),
//     state VARCHAR(2),
//     password VARCHAR(100) NOT NULL,
//     created_on DATE NOT NULL



// CREATE TABLE IF NOT EXISTS teachers
//         (id SERIAL PRIMARY KEY, 
//         email VARCHAR(100) UNIQUE NOT NULL, 
//         first_name VARCHAR(100), 
//         last_name VARCHAR(100), 
//         birthday DATE, 
//         city VARCHAR(30),
//         state VARCHAR(2),
//         password VARCHAR(100) NOT NULL,
//         created_on DATE NOT NULL



//         CREATE TABLE IF NOT EXISTS groups
//         (id SERIAL PRIMARY KEY, 
//         name VARCHAR(100) NOT NULL, 
//         type VARCHAR(100) NOT NULL,
//         created_on DATE NOT NULL



//         CREATE TABLE IF NOT EXISTS student_courses
//     (id SERIAL PRIMARY KEY, 
//     student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
//     course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE



//     CREATE TABLE IF NOT EXISTS student_groups
//     (id SERIAL PRIMARY KEY, 
//     student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
//     group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE



//     CREATE TABLE IF NOT EXISTS forums
//     (id SERIAL PRIMARY KEY, 
//     name VARCHAR(50) NOT NULL,
//     group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE


//     CREATE TABLE IF NOT EXISTS posts
//     (id SERIAL PRIMARY KEY, 
//     forum_id INTEGER REFERENCES forums(id) ON DELETE CASCADE,
//     title VARCHAR(100),
//     content VARCHAR(10000),
//     created_on DATE NOT NULL