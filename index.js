const express = require('express')
const routes = require('./routes')
const server = express()
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use('/api', routes)

module.exports = {
    server
}