const models = require('../models')

const getAllTeachers = async(req, res) => {
    try {
        const teachers = await models.Teacher.findAll({
            include: [
                {
                    model: models.Course,
                    as: 'courses'
                }
            ]
        });
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json({teachers})
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const getTeacherById = async(req, res) => {
    try {
        const { id } = req.params;
        const teacher = await models.Teacher.findOne({
            where: { id: id},
            include: [
                {
                    model: models.Course,
                    as: 'courses'
                }
            ]
        })
        if(teacher){
            return res.status(200).json({teacher})
        }
        return res.status(404).send('Teacher with this ID does not exist')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const createTeacher = async(req, res) => {
    try {
        const teacher = await models.Teacher.create(req.body.teacherInfo)
        return res.status(201).json({
            teacher
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const updateTeacher = async(req, res) => {
    try{
        const {id} = req.params
        const [updated] = await models.Teacher.update(req.body, {
            where: {id: id}
        })
        if(updated){
            const updatedTeacher = await models.Teacher.findOne({where: {id: id}})
            return res.status(200).json({teacher: updatedTeacher})
        }
        throw new Error('Teacher not found');
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteTeacher = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await models.Teacher.destroy({
            where: {id: id}
        })
        if(deleted){
            return res.status(204).send(`Deleted teacher with id ${id}`)
        }
        throw new Error('Teacher not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTeachers,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher
};