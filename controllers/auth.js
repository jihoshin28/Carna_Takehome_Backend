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
        where: {username: req.body.username}
    }).then(async(result) => {
        console.log(result, 'result')
        if(!result){
            return res.json({
                success: false,
                message: 'User with this username does not exist!'
            })
        }
        let myPassword = result.dataValues.password
        let salt = bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(myPassword, salt, function(err, hash) {
                bcrypt.compare(req.body.password, hash, function(err, response){
                    if(err){
                        throw err
                    }
        
                    if(response){
                        console.log(response, "VALID RES")
                        const token = jwt.sign({
                            username: req.body.username
                        },
                        process.env.SECRET,
                        {
                            expiresIn: '10m'
                        })
                        console.log(token, 'token')
                        return res.json({
                            success: true,
                            message: "Authorization successful!",
                            token: token
                        })
                    } else {
                        return res.json({
                            success: false,
                            message: "Passwords do not match!"
                        })
                    
                    }
                })
            });
        });
        // const validated = await bcrypt.compare(req.body.password, myPasswordHash, function(err, response){
        //     if(err){
        //         throw err
        //     }

        //     if(response){
        //         console.log(response, "VALID RES")
        //         const token = jwt.sign({
        //             username: req.body.username
        //         },
        //         process.env.SECRET,
        //         {
        //             expiresIn: '10m'
        //         })
        //         console.log(token, 'token')
        //         return res.json({
        //             success: true,
        //             message: "Authorization successful!",
        //             token: token
        //         })
        //     } else {
        //         return res.json({
        //             success: false,
        //             message: "Passwords do not match!"
        //         })
            
        //     }
        // })

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