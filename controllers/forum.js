const models = require('../models')

const getAllForums = async(req, res) => {
    try {
        const forums = await models.Forum.findAll({
            include: [
                {
                    model: models.Post,
                    as: 'posts'
                }
            ]
        });
        return res.status(200).json({forums})
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const getForumById = async(req, res) => {
    try {
        const { id } = req.params;
        const forum = await models.Forum.findOne({
            where: { id: id},
            include: [
                {
                    model: models.Post,
                    as: 'posts'
                }
            ]
        })
        if(forum){
            return res.status(200).json({forum})
        }
        return res.status(404).send('Forum with this ID does not exist')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const createForum = async(req, res) => {
    try {
        const forum = await models.Forum.create(req.body)
        return res.status(201).json({
            forum
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const updateForum = async(req, res) => {
    try{
        const {id} = req.params
        const [updated] = await models.Forum.update(req.body, {
            where: {id: id}
        })
        if(updated){
            const updatedForum = await models.Forum.findOne({where: {id: id}})
            return res.status(200).json({forum: updatedForum})
        }
        throw new Error('Forum not found');
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteForum = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await models.Forum.destroy({
            where: {id: id}
        })
        if(deleted){
            return res.status(204).send(`Deleted forum with id ${id}`)
        }
        throw new Error('Forum not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllForums,
    getForumById,
    createForum,
    updateForum,
    deleteForum
};