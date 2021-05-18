import dotenv from 'dotenv'
import express from 'express'
import db from './queries.js'
const app = express()
const port = 3000

dotenv.config()
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/students', db.students.getStudents)
app.get('/students/:id', db.students.getStudentById)
app.post('/students', db.students.postStudent)
app.patch('/students/:id', db.students.updateStudent)
app.delete('/students/:id', db.students.deleteStudent)




app.listen(port, () => {
    console.log(`App running on port ${port} for postgres application ${process.env.PORT}`)
})

