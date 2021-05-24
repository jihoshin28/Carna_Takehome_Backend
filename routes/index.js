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


const router = Router()

router.get('/', (req, res) => res.send('Welcome to Carna Admin Panel!'))
router.get('/api', (req, res) => res.send('Welcome to Carna Admin Panel!'))

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

//studentgroup routes

router.get('/student_groups', student_groups.getAllStudentGroups)
router.post('/student_groups', student_groups.createStudentGroup)
router.delete('/student_groups/:group_id/:student_id', student_groups.deleteStudentGroup)

//studentcourse routes

router.get('/student_courses', student_courses.getAllStudentCourses)
router.post('/student_courses', student_courses.createStudentCourse)
router.get('/student_courses/:course_id/:student_id', student_courses.getCourseStudentInfo)
router.delete('/student_courses/:course_id/:student_id', student_courses.deleteStudentCourse)

//auth routes

router.post('/login', auth.login)
router.post('/signup', auth.signUp)

//admin routes

router.get('/admin', admin.getAdmin)
router.put('/admin', admin.updateAdmin)

module.exports = router