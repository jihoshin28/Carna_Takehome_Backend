const models = require('../models')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const login = async(req, res) => {
    await models.Admin.findOne({
        where: {username: req.body.username}
    }).then(async(result) => {
        if(!result){
            return res.json({
                success: false,
                message: 'User with this username does not exist!'
            })
        }
        let myPassword = result.dataValues.password

        if(myPassword === req.body.password){

            const token = jwt.sign({
                username: req.body.username
            },
            process.env.SECRET)
            console.log(token, 'token')
            return res.json({
                success: true,
                message: "Authorization successful!",
                token: token,
                admin: result.dataValues
            })
        } else {
            return res.json({
                success: false,
                message: "Passwords do not match!"
            })
        }

    }).catch((error) => {
        throw error
    })

}


module.exports = {
    login
}