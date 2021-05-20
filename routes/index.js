const { Router } = require('express')
const students = require('../controllers/student')
const teachers = require('../controllers/teacher')
const groups = require('../controllers/group')
const courses = require('../controllers/course')
const forums = require('../controllers/forum')
const posts = require('../controllers/post')

const router = Router()

router.get('/', (req, res) => res.send('Welcome!'))

// students routes

router.get('/students', students.getAllStudents)
router.get('/students/:id', students.getStudentById)
router.post('/students', students.createStudent)
router.put('/students/:id', students.updateStudent)
router.delete('/students/:id', students.deleteStudent)

// teachers routes

router.get('/teachers', teachers.getAllTeachers)
router.get('/teachers/:id', teachers.getTeacherById)
router.post('/teachers', teachers.createTeacher)
router.put('/teachers/:id', teachers.updateTeacher)
router.delete('/teachers/:id', teachers.deleteTeacher)

// groups routes

router.get('/groups', groups.getAllGroups)
router.get('/groups/:id', groups.getGroupById)
router.post('/groups', groups.createGroup)
router.put('/groups/:id', groups.updateGroup)
router.delete('/groups/:id', groups.deleteGroup)

// courses routes

router.get('/courses', courses.getAllCourses)
router.get('/courses/:id', courses.getCourseById)
router.post('/courses', courses.createCourse)
router.put('/courses/:id', courses.updateCourse)
router.delete('/courses/:id', courses.deleteCourse)

// forums routes

router.get('/forums', forums.getAllForums)
router.get('/forums/:id', forums.getForumById)
router.post('/forums', forums.createForum)
router.put('/forums/:id', forums.updateForum)
router.delete('/forums/:id', forums.deleteForum)

// posts routes 

router.get('/posts', posts.getAllPosts)
router.get('/posts/:id', posts.getPostById)
router.post('/posts', posts.createPost)
router.put('/posts/:id', posts.updatePost)
router.delete('/posts/:id', posts.deletePost)

module.exports = router