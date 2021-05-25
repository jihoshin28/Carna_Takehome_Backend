// const dotenv = require ('dotenv')
const port = 3001
const {server} = require('./index')

server.listen(port, () => {
    console.log(`App running on port ${port} for postgres application ${process.env.DATABASE_URL}`)
})

