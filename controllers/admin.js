const models = require('../models')

const getAdmin = async(req, res) => {
    try {
        const admin = await models.Admin.findOne()
        if(admin){
            return res.status(200).json({admin})
        }
        return res.status(404).send('Admin with this ID does not exist')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const updateAdmin = async(req, res) => {
    try{
        const {id} = req.params
        const updated = await models.Admin.update(req.body, {
            where: {id: id}
        })
        if(updated){
            const updatedAdmin = await models.Admin.findOne({where: {id: id}})
            return res.status(200).json({updatedAdmin})
        }

    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAdmin,
    updateAdmin
}