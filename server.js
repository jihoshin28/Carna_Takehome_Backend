// const dotenv = require ('dotenv')
const express = require('express')
const port = 3001
const routes = require('./routes')
const server = express()
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

server.use(cors())
server.use(express.json())
server.use('/api', routes)


server.listen(port, () => {
    console.log(`App running on port ${port} for postgres application ${process.env.DATABASE_URL}`)
})

