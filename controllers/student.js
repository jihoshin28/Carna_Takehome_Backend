const models = require('../models')

const getAllStudents = async(req, res) => {
    try {
        const students = await models.Student.findAll({
            include: [
                {
                    model: models.Course,
                    as: 'courses'
                }
            ]
        });
        return res.status(200).json({students})
    } catch (error){
        return res.status(500).send(`ERROR: ${error.message}`)
    }
}

const getStudentById = async(req, res) => {
    try {
        const { id } = req.params;
        const course = await models.Student.findOne({
            where: { id: id},
            include: [
                {
                    model: models.Course,
                    as: 'courses'
                }
            ]
        })
        if(course){
            return res.status(200).json({course})
        }
        return res.status(404).send('Course with this ID does not exist')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const createStudent = async(req, res) => {
    try {
        const student = await models.Student.create(req.body)
        return res.status(201).json({
            post,
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const updateStudent = async(req, res) => {
    try{
        const {id} = req.params
        const [updated] = await models.Student.update(req.body, {
            where: {id: id}
        })
        if(updated){
            const updatedStudent = await models.Student.findOne({where: {id: id}})
            return res.status(200).json({student: updatedStudent})
        }
        throw new Error('Student not found');
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteStudent = async(req, res) => {
    try {
        const {id} = req.params
        const [deleted] = await models.Student.destroy({
            where: {id: id}
        })
        if(deleted){
            return res.status(204).send(`Deleted student with id ${id}`)
        }
        throw new Error('Student not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}