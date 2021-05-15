const Pool = require('pg').Pool

const pool = new Pool({
    user: 'allenshin',
    host: 'localhost',
    database: 'carna_takehome',
    port: 5432,
})

//STUDENT QUERIES

// query for getting all students

const getStudents = (request, response) => {
    pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// query for getting student by id

const getStudentById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM students WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// query for creating a student 

const postStudent = (request, response) => {
    console.log(request.body)
    const {first_name, last_name, birthday, email, password, city, state } = request.body
    pool.query('INSERT INTO students (first_name, last_name, birthday, email, password, city, state) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [first_name, last_name, birthday, email, password, city, state], 
    (error, results) => {
        if(error){
            throw error
        }
        
        response.status(200).send(`User added with ID: ${results.insertId}`)
    })
}

// query for updating a student

const updateStudent = (request, response) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const request_keys = Object.keys(request.body)
    let string = ''
    for(let i = 0; i < request_keys.length; i++){
        string += `${request_keys[i]} = ${request.body[request_keys[i]]} `
    }
    console.log(string)
    //'UPDATE students SET first_name = $1, last_name = $2, birthday = $3, email = $4, password = $5, city = $6, state = $7 WHERE id = $8'
    pool.query(`UPDATE students SET ${string}WHERE id = ${id}`, 
    [],
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).send(`User modified with ID: ${results.insertId}`)
    })
}

const deleteStudent = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

//TEACHER QUERIES

// query for getting all teachers
const getTeachers = (request, response) => {
    pool.query('SELECT * FROM teachers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// query for getting teacher by id
const getTeacherById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM students WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    'students': {
        getStudents,
        getStudentById,
        postStudent, 
        updateStudent,
        deleteStudent

    },
    'teachers': {
        getTeachers,
        getTeacherById
    }

    
}