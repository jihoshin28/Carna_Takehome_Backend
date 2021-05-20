const { Router } = require('express')
const students = require('../controllers/student')
const teachers = require('../controllers/teacher')
const groups = require('../controllers/group')
const courses = require('../controllers/course')
const forums = require('../controllers/forum')
const posts = require('../controllers/post')

const router = Router()

router.get('/', (req, res) => res.send('Welcome snowflake'))

// students routes

router.get('/students', (req, res) => students.getAllStudents)
router.get('/students/:id', (req, res) => students.getStudentById)
router.post('/students', (req, res) => students.createStudent)
router.put('/students/:id', (req, res) => students.updateStudent)
router.delete('/students/:id', (req, res) => students.deleteStudent)

// teachers routes

router.get('/teachers', (req, res) => teachers.getAllTeachers)
router.get('/teachers/:id', (req, res) => teachers.getTeacherById)
router.post('/teachers', (req, res) => teachers.createTeacher)
router.put('/teachers/:id', (req, res) => teachers.updateTeacher)
router.delete('/teachers/:id', (req, res) => teachers.deleteTeacher)

// groups routes

router.get('/groups', (req, res) => groups.getAllGroups)
router.get('/groups/:id', (req, res) => groups.getGroupById)
router.post('/groups', (req, res) => groups.createGroup)
router.put('/groups/:id', (req, res) => groups.updateGroup)
router.delete('/groups/:id', (req, res) => groups.deleteGroup)

// courses routes

router.get('/courses', (req, res) => courses.getAllCourses)
router.get('/courses/:id', (req, res) => courses.getCourseById)
router.post('/courses', (req, res) => courses.createCourse)
router.put('/courses/:id', (req, res) => courses.updateCourse)
router.delete('/courses/:id', (req, res) => courses.deleteCourse)

// forums routes

router.get('/forums', (req, res) => forums.getAllForums)
router.get('/forums/:id', (req, res) => forums.getForumById)
router.post('/forums', (req, res) => forums.createForum)
router.put('/forums/:id', (req, res) => forums.updateForum)
router.delete('/forums/:id', (req, res) => forums.deleteForum)

// posts routes 

router.get('/posts', (req, res) => posts.getAllPosts)
router.get('/posts/:id', (req, res) => posts.getPostById)
router.post('/posts', (req, res) => posts.createPost)
router.put('/posts/:id', (req, res) => posts.updatePost)
router.delete('/posts/:id', (req, res) => posts.deletePost)

module.exports = router