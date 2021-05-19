const dotenv = require ('dotenv')
const express = require('express')
const app = express()
const port = 3000
const db = require('./queries')


app.use(express.json())
app.use(express.urlencoded())

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/students', db.students.getStudents)
app.get('/students/:id', db.students.getStudentById)
app.post('/students', db.students.postStudent)
app.patch('/students/:id', db.students.updateStudent)
app.delete('/students/:id', db.students.deleteStudent)

app.get('/teachers', db.teachers.getTeachers)
app.get('/teachers/:id', db.teachers.getTeacherById)
app.post('/teachers', db.teachers.postTeacher)
app.patch('/teachers/:id', db.teachers.updateTeacher)
app.delete('/teachers/:id', db.teachers.deleteTeacher)

app.get('/groups', db.groups.getGroups)
app.get('/groups/:id', db.groups.getGroupById)
app.post('/groups', db.groups.postGroup)
app.patch('/groups/:id', db.groups.updateGroup)
app.delete('/groups/:id', db.groups.deleteGroup)

app.get('/courses', db.courses.getCourses)
app.get('/courses/:id', db.courses.getCourseById)
app.post('/courses', db.courses.postCourse)
app.patch('/courses/:id', db.courses.updateCourse)
app.delete('/courses/:id', db.courses.deleteCourse)

app.get('/forums', db.forums.getForums)
app.get('/forums/:id', db.forums.getForumById)
app.post('/forums', db.forums.postForum)
app.patch('/forums/:id', db.forums.updateForum)
app.delete('/forums/:id', db.forums.deleteForum)

app.get('/posts', db.posts.getPosts)
app.get('/posts/:id', db.posts.getPostById)
app.post('/posts', db.posts.postPost)
app.patch('/posts/:id', db.posts.updatePost)
app.delete('/posts/:id', db.posts.deletePost)


app.listen(port, () => {
    console.log(`App running on port ${port} for postgres application ${process.env.DATABASE_URL}`)
})

