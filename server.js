// const dotenv = require ('dotenv')
const express = require('express')
const port = 3000
const routes = require('./routes')
const server = express()
const dotenv = require('dotenv')

dotenv.config()

server.use(express.json())
server.use('/api', routes)


server.listen(port, () => {
    console.log(`App running on port ${port} for postgres application ${process.env.DATABASE_URL}`)
})

