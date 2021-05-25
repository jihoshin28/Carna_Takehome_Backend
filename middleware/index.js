const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"]
    console.log(req.headers)
    if(!token){
        return res.status(403).send({
            message: "No token!"
        })
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err){
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
        req.user = user
        next()
    })
}

module.exports = {
    verifyToken
}