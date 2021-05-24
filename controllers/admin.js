const models = require('../models')

const getAdmin = async(req, res) => {
    try {
        const admin = await models.Admin.findOne()
        if(admin){
            return res.status(200).json({admin})
        }
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const updateAdmin = async(req, res) => {
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

module.exports = {
    getAdmin,
    updateAdmin
}