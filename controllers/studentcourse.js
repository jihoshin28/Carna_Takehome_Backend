const models = require('../models')

const getAllStudentCourses = async(req, res) => {
    try {
        const student_courses = await models.StudentCourse.findAll();
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json({student_courses})
    } catch (error){
        return res.status(500).send(`ERROR: ${error.message}`)
    }
}

const getStudentCourseInfo = async(req, res) => {
    try {
        let {student_id} = req.params
        const student_course_info = await models.StudentCourse.findAll({
            where: {student_id: student_id}
        });
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json({student_course_info})
    } catch (error){
        return res.status(500).send(`ERROR: ${error.message}`)
    }
}

const getCourseStudentInfo = async(req, res) => {
    try {
        let {course_id, student_id} = req.params
        const course_student_info = await models.StudentCourse.findOne({
            where: {
                course_id: course_id,
                student_id: student_id
            }
        });
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json({course_student_info})
    } catch (error){
        return res.status(500).send(`ERROR: ${error.message}`)
    }
}

const createStudentCourse = async(req, res) => {
    try {
        const studentCourse = await models.StudentCourse.create(req.body.studentCourseInfo)
        return res.status(201).json({
            studentCourse
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const deleteStudentCourse = async(req, res) => {
    try {
        console.log(req.params)
        const {student_id, course_id} = req.params
        const deleted = await models.StudentCourse.destroy({
            where: {student_id: student_id, course_id: course_id}
        })
        if(deleted){
            return res.status(204).json({deleted})
        }
        throw new Error('Student Course not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllStudentCourses,
    getStudentCourseInfo,
    getCourseStudentInfo,
    createStudentCourse,
    deleteStudentCourse
}