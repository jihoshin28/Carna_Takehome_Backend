const models = require('../models')

const getAllGroups = async(req, res) => {
    try {
        const groups = await models.Group.findAll({
            include: {
                model: models.Student,
                as: 'students'
            }
        });
        return res.status(200).json({groups})
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const getGroupById = async(req, res) => {
    try {
        const { id } = req.params;
        const group = await models.Group.findOne({
            where: { id: id}
        })
        if(group){
            return res.status(200).json({group})
        }
        return res.status(404).send('Group with this ID does not exist')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const createGroup = async(req, res) => {
    try {
        const group = await models.Group.create(req.body)
        return res.status(201).json({
            group
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const updateGroup = async(req, res) => {
    try{
        const {id} = req.params
        const [updated] = await models.Group.update(req.body, {
            where: {id: id}
        })
        if(updated){
            const updatedGroup = await models.Group.findOne({where: {id: id}})
            return res.status(200).json({group: updatedGroup})
        }
        throw new Error('Group not found');
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteGroup = async(req, res) => {
    try {
        const {id} = req.params
        const [deleted] = await models.Group.destroy({
            where: {id: id}
        })
        if(deleted){
            return res.status(204).send(`Deleted group with id ${id}`)
        }
        throw new Error('Group not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup
};