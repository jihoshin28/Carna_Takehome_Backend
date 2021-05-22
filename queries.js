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

    pool.query('SELECT * FROM Student ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
        
    })
}

// query for getting student by id

const getStudentById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM students WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for creating a student 

const postStudent = (request, response) => {
    console.log(request.body)
    const {first_name, last_name, email, city, state, password, created_on } = request.body
    pool.query('INSERT INTO students (first_name, last_name, email, city, state, password, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [first_name, last_name, email, city, state, password, created_on], 
    (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for updating a student

const updateStudent = (request, response) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const request_keys = Object.keys(request.body)
    let string = ''
    for(let i = 0; i < request_keys.length; i++){
        if(i !== request_keys.length - 1){
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}', `
        } else {
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}'`
        }
    }

    console.log(string)
    //'UPDATE students SET first_name = $1, last_name = $2, birthday = $3, email = $4, password = $5, city = $6, state = $7 WHERE id = $8'
    pool.query(`UPDATE students SET ${string} WHERE id = ${id}`, 
    [],
    (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data modified with ID: ${id}`)
        }
    })
}

const deleteStudent = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data deleted with ID: ${id}`)
        }
    })
}

//TEACHER QUERIES

// query for getting all teachers

const getTeachers = (request, response) => {
    pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for getting student by id

const getTeacherById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM teachers WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for creating a teacher 

const postTeacher = (request, response) => {
    console.log(request.body)
    const {first_name, last_name, email, city, state, password, created_on } = request.body
    pool.query('INSERT INTO teachers (first_name, last_name, email, city, state, password, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [first_name, last_name, email, city, state, password, created_on], 
    (error, results) => {
        if(error){
            throw error
        }
        
        console.log(results)
    })
}

// query for updating a teacher

const updateTeacher = (request, response) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const request_keys = Object.keys(request.body)
    let string = ''
    for(let i = 0; i < request_keys.length; i++){
        if(i !== request_keys.length - 1){
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}', `
        } else {
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}'`
        }
    }

    console.log(string)
    //'UPDATE teachers SET first_name = $1, last_name = $2, birthday = $3, email = $4, password = $5, city = $6, state = $7 WHERE id = $8'
    pool.query(`UPDATE teachers SET ${string} WHERE id = ${id}`, 
    [],
    (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data modified with ID: ${id}`)
        }
    })
}

const deleteTeacher = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM teachers WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data deleted with ID: ${id}`)
        }
    })
}

//GROUP QUERIES

// query for getting all groups

const getGroups = (request, response) => {
    pool.query('SELECT * FROM groups ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for getting group by id

const getGroupById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM groups WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for creating a group 

const postGroup = (request, response) => {
    console.log(request.body)
    const { name, type, created_on } = request.body
    pool.query('INSERT INTO groups (name, type, created_on) VALUES ($1, $2, $3)', 
    [name, type, created_on], 
    (error, results) => {
        if(error){
            throw error
        }
        
        console.log(results)
    })
}

// query for updating a group

const updateGroup = (request, response) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const request_keys = Object.keys(request.body)
    let string = ''
    for(let i = 0; i < request_keys.length; i++){
        if(i !== request_keys.length - 1){
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}', `
        } else {
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}'`
        }
    }

    console.log(string)
    //'UPDATE groups SET first_name = $1, last_name = $2, birthday = $3, email = $4, password = $5, city = $6, state = $7 WHERE id = $8'
    pool.query(`UPDATE groups SET ${string} WHERE id = ${id}`, 
    [],
    (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data modified with ID: ${id}`)
        }
    })
}

const deleteGroup = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM groups WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data deleted with ID: ${id}`)
        }
    })
}

// COURSES QUERIES

// query for getting all courses

const getCourses = (request, response) => {
    pool.query('SELECT * FROM courses ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for getting course by id

const getCourseById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM courses WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for creating a course 

const postCourse = (request, response) => {
    console.log(request.body)
    const { teacher_id, subject, start_date, end_date, created_on } = request.body
    pool.query('INSERT INTO courses (teacher_id, subject, start_date, end_date, created_on) VALUES ($1, $2, $3, $4, $5)', 
    [teacher_id, subject, start_date, end_date, created_on], 
    (error, results) => {
        if(error){
            throw error
        }
        
        console.log(results)
    })
}

// query for updating a course

const updateCourse = (request, response) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const request_keys = Object.keys(request.body)
    let string = ''
    for(let i = 0; i < request_keys.length; i++){
        if(i !== request_keys.length - 1){
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}', `
        } else {
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}'`
        }
    }

    console.log(string)
    //'UPDATE courses SET first_name = $1, last_name = $2, birthday = $3, email = $4, password = $5, city = $6, state = $7 WHERE id = $8'
    pool.query(`UPDATE courses SET ${string} WHERE id = ${id}`, 
    [],
    (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data modified with ID: ${id}`)
        }
    })
}

const deleteCourse = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM courses WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data deleted with ID: ${id}`)
        }
    })
}

// FORUMS QUERIES

// query for getting all forums

const getForums = (request, response) => {
    pool.query('SELECT * FROM forums ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for getting forum by id

const getForumById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM forums WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for creating a forum 

const postForum = (request, response) => {
    console.log(request.body)
    const {group_id, title, content, created_on} = request.body
    pool.query('INSERT INTO forums (group_id, title, content, created_on) VALUES ($1, $2)', 
    [group_id, title, content, created_on], 
    (error, results) => {
        if(error){
            throw error
        }
        
        console.log(results)
    })
}

// query for updating a forum

const updateForum = (request, response) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const request_keys = Object.keys(request.body)
    let string = ''
    for(let i = 0; i < request_keys.length; i++){
        if(i !== request_keys.length - 1){
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}', `
        } else {
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}'`
        }
    }

    console.log(string)
    //'UPDATE forums SET first_name = $1, last_name = $2, birthday = $3, email = $4, password = $5, city = $6, state = $7 WHERE id = $8'
    pool.query(`UPDATE forums SET ${string} WHERE id = ${id}`, 
    [],
    (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data modified with ID: ${id}`)
        }
    })
}

const deleteForum = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM forums WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data deleted with ID: ${id}`)
        }
    })
}

//POST QUERIES

// query for getting all posts

const getPosts = (request, response) => {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for getting post by id

const getPostById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM posts WHERE id = $1`, [id], (error, results) => {
        if(error){
            throw error
        }

        if(!response){
            console.log(results)
        } else {
            response.status(200).json(results.rows)
        }
    })
}

// query for creating a post 

const postPost = (request, response) => {
    console.log(request.body)
    const {forum_id, title, content, created_on} = request.body
    pool.query('INSERT INTO posts (forum_id, title, content, created_on) VALUES ($1, $2, $3, $4)', 
    [forum_id, title, content, created_on], 
    (error, results) => {
        if(error){
            throw error
        }
        
        console.log(results)
    })
}

// query for updating a post

const updatePost = (request, response) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const request_keys = Object.keys(request.body)
    let string = ''
    for(let i = 0; i < request_keys.length; i++){
        if(i !== request_keys.length - 1){
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}', `
        } else {
            string += `${request_keys[i]} = '${request.body[request_keys[i]]}'`
        }
    }

    console.log(string)
    //'UPDATE posts SET first_name = $1, last_name = $2, birthday = $3, email = $4, password = $5, city = $6, state = $7 WHERE id = $8'
    pool.query(`UPDATE posts SET ${string} WHERE id = ${id}`, 
    [],
    (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data modified with ID: ${id}`)
        }
    })
}

const deletePost = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        
        if(!response){
            console.log(results)
        } else {
            response.status(200).send(`Data deleted with ID: ${id}`)
        }
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
        getTeacherById,
        postTeacher, 
        updateTeacher,
        deleteTeacher

    },
    'groups': {
        getGroups,
        getGroupById,
        postGroup, 
        updateGroup,
        deleteGroup

    },
    'courses': {
        getCourses,
        getCourseById,
        postCourse, 
        updateCourse,
        deleteCourse

    },
    'forums': {
        getForums,
        getForumById,
        postForum, 
        updateForum,
        deleteForum

    },
    'posts': {
        getPosts,
        getPostById,
        postPost, 
        updatePost,
        deletePost
    },
    // 'student_groups': {
    //     createStudentGroup, 
    //     getStudentsInGroup,
    //     getGroupsofStudent
    // },
    // 'student_courses': {
    //     createStudentCourse,
    //     getStudentsInCourse,
    //     getCourseofStudent
    // }    
}