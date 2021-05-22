const models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const dotenv = require('dotenv')

dotenv.config()

const signUp = async(req, res) => {
    console.log(req.next)
    res.status(200).send({message: "ALL GOOD"})
    // await models.Admin.findOne({
    //     where: {username: req.username}
    // }).then((result) => {
    //     if(result.length > 0){
    //         res.status(302).send({
    //             message: "User with this username already exists"
    //         })
    //         return
    //     }
    // }).catch((error) => {
    //     console.log(error, "error")
    // })
    
    // let hashedPassword = await bcrypt.hash(req.body.password, 12)
    // let body = {username: req.body.username, email: req.body.email, password: hashedPassword}
    // try {
    //     let newAdmin = await models.Admin.create(body)
    //     res.status(200).json(newAdmin)
    // } catch (error) {
    //     throw error
    // }
}

const login = async(req, res) => {
    await models.Admin.findOne({
        where: {username: req.username}
    }).then(async(result) => {
        if(result.length === 0){
            return res.status(302).send({
                mesage: "User with this username does not exist"
            })
        }

        const validated = await bcrypt.compare(req.body.password, result[0].password)
        
        if(!validated){
            res.status(404).send({
                error: "Invalid credentials",
                token: null
            })
        }

        const token = jwt.sign({
            user: _.pick(results[0], ['id', 'email'])
        },
        process.env.SECRET,
        {
            expiresIn: '10m'
        })

        res.status(200).send({"token": token})

    }).catch((error) => {
        throw error
    })

}

const verifyToken = (req, res, next) => {
   let token = req.headers["token"]
   if(!token){
       return res.status(403).send({
           message: "No token!"
       })
   }
   jwt.verify(token, config.secret, (err, decoded) => {
       if(err){
           return res.status(401).send({
               message: "Unauthorized"
           })
       }
       req.userId = decoded.id
       next()
   })
}

module.exports = {
    verifyToken,
    login,
    signUp,
}