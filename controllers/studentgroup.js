const models = require('../models')

const getAllStudentGroups = async(req, res) => {
    try {
        const students = await models.StudentGroup.findAll();
        console.log(students)
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json({students})
    } catch (error){
        return res.status(500).send(`ERROR: ${error.message}`)
    }
}

const createStudentGroup = async(req, res) => {
    try {
        const studentGroup = await models.StudentGroup.create(req.body)
        return res.status(201).json({
            studentGroup,
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const deleteStudentGroup = async(req, res) => {
    try {
        console.log(req.params)
        const {student_id, group_id} = req.params
        const deleted = await models.StudentGroup.destroy({
            where: {student_id: student_id, group_id: group_id}
        })
        if(deleted){
            return res.status(204).json({deleted})
        }
        throw new Error('Student Group not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllStudentGroups,
    createStudentGroup,
    deleteStudentGroup
}