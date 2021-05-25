const models = require('../models')

const getAllPosts = async(req, res) => {
    try {
        const posts = await models.Post.findAll();
        return res.status(200).json({posts})
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const getPostById = async(req, res) => {
    try {
        const { id } = req.params;
        const post = await models.Post.findOne({
            where: { id: id}
        })
        if(post){
            return res.status(200).json({post})
        }
        return res.status(404).send('Post with this ID does not exist')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

const createPost = async(req, res) => {
    console.log(req.body)
    try {
        const post = await models.Post.create(req.body)
        return res.status(201).json({
            post
        })
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

const deletePost = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await models.Post.destroy({
            where: {id: id}
        })
        if(deleted){
            return res.status(204).send(`Deleted post with id ${id}`)
        }
        throw new Error('Post not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    deletePost
};