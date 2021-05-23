const models = require('../models')

const createStudentCourse = async(req, res) => {
    try {
        const studentCourse = await models.StudentCourse.create(req.body)
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
    createStudentCourse,
    deleteStudentCourse
}