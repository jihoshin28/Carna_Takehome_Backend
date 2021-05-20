// const dotenv = require ('dotenv')
const express = require('express')
const port = 3001
const routes = require('./routes')
const server = express()

server.use(express.json())
server.use('/api', routes)

// const db = require('./queries')


server.use(express.json())
server.use(express.urlencoded())


server.listen(port, () => {
    console.log(`App running on port ${port} for postgres application ${process.env.DATABASE_URL}`)
})

