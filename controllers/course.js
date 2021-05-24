const models = require('../models')

const getAllCourses = async(req, res) => {
    try {
        const courses = await models.Course.findAll({
            include: [
                {
                    model: models.Student,
                    as: 'students'
                }
            ]
        });
        return res.status(200).json({courses})
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const getCourseById = async(req, res) => {
    try {
        const { id } = req.params;
        const course = await models.Course.findOne({
            where: { id: id},
            include: [
                {
                    model: models.Student,
                    as: 'students'
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

const createCourse = async(req, res) => {
    try {
        const course = await models.Course.create(req.body.courseInfo)
        return res.status(201).json({
            course,
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const updateCourse = async(req, res) => {
    try{
        const {id} = req.params
        const [updated] = await models.Course.update(req.body, {
            where: {id: id}
        })
        if(updated){
            const updatedCourse = await models.Course.findOne({where: {id: id}})
            return res.status(200).json({course: updatedCourse})
        }
        throw new Error('Course not found');
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteCourse = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await models.Course.destroy({
            where: {id: id}
        })
        if(deleted){
            return res.status(204).send(`Deleted course with id ${id}`)
        }
        throw new Error('Course not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};