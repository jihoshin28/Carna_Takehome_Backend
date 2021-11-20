const { Router } = require('express')
const students = require('../controllers/student')
const teachers = require('../controllers/teacher')
const groups = require('../controllers/group')
const courses = require('../controllers/course')
const forums = require('../controllers/forum')
const posts = require('../controllers/post')
const student_groups = require('../controllers/studentgroup')
const student_courses = require('../controllers/studentcourse')
const auth = require('../controllers/auth')
const admin = require('../controllers/admin')
const verifyToken = require('../middleware/index.js').verifyToken
 

const router = Router()

console.log(verifyToken, 'verifyToken')
router.get('/', (req, res) => res.send('Welcome to Carna Admin Panel!'))
router.get('/api', (req, res) => res.send('Welcome to Carna Admin Panel!'))

// students routes

router.get('/students', verifyToken, students.getAllStudents)
router.get('/students/:id', verifyToken, students.getStudentById)
router.post('/students', verifyToken, students.createStudent)
router.delete('/students/:id', verifyToken, students.deleteStudent)

// teachers routes

router.get('/teachers', verifyToken, teachers.getAllTeachers)
router.get('/teachers/:id', verifyToken, teachers.getTeacherById)
router.post('/teachers', verifyToken, teachers.createTeacher)
router.delete('/teachers/:id', verifyToken, teachers.deleteTeacher)

// groups routes

router.get('/groups', verifyToken, groups.getAllGroups)
router.get('/groups/:id', verifyToken, groups.getGroupById)
router.post('/groups', verifyToken, groups.createGroup)
router.delete('/groups/:id', verifyToken, groups.deleteGroup)

// courses routes

router.get('/courses', verifyToken, courses.getAllCourses)
router.get('/courses/:id', verifyToken, courses.getCourseById)
router.post('/courses', verifyToken, courses.createCourse)
router.put('/courses/:id', verifyToken, courses.updateCourse)
router.delete('/courses/:id', verifyToken, courses.deleteCourse)

// forums routes

router.get('/forums', verifyToken, forums.getAllForums)
router.get('/forums/:id', verifyToken, forums.getForumById)
router.post('/forums', verifyToken, forums.createForum)
router.put('/forums/:id', verifyToken, forums.updateForum)
router.delete('/forums/:id', verifyToken, forums.deleteForum)

// posts routes 

router.get('/posts', verifyToken, posts.getAllPosts)
router.get('/posts/:id', verifyToken, posts.getPostById)
router.post('/posts', verifyToken, posts.createPost)
router.delete('/posts/:id', verifyToken, posts.deletePost)

//studentgroup routes

router.get('/student_groups', verifyToken, student_groups.getAllStudentGroups)
router.post('/student_groups', verifyToken, student_groups.createStudentGroup)
router.delete('/student_groups/:group_id/:student_id', verifyToken, student_groups.deleteStudentGroup)

//studentcourse routes

router.get('/student_courses', verifyToken, student_courses.getAllStudentCourses)
router.post('/student_courses', verifyToken, student_courses.createStudentCourse)
router.get('/student_courses/course/:course_id', verifyToken, student_courses.getCourseStudentsInfo)
router.get('/student_courses/:course_id/:student_id', verifyToken, student_courses.getCourseStudentInfo)
router.delete('/student_courses/:course_id/:student_id', verifyToken, student_courses.deleteStudentCourse)

//auth routes

router.post('/login', auth.login)

//admin routes

router.get('/admin', admin.getAdmin)
router.put('/admin/:id', admin.updateAdmin)

module.exports = router