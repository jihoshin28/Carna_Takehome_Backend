const {server} = require('../index.js')
const request = require('supertest')
let student_id

describe('Student Endpoints', () => {
  it('should get all students', async() => {
    const res = await request(server)
    .get('/api/students')
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('students')
  })

  it('should create a new student', async () => {
      const res = await request(server)
      .post('/api/students')
      .send({
          studentInfo: {
            first_name: "First",
            last_name: "Last",
            email: "someemail@gmail.com",
            image: "someimageurl",
            createdAt: new Date(),
            updatedAt: new Date()
          }
      })
      expect(res.statusCode).toEqual(201)
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('student')
      expect(res.body.student.first_name).toEqual('First')
      expect(res.body.student.last_name).toEqual('Last')
      expect(res.body.student.email).toEqual('someemail@gmail.com')
      expect(res.body.student.image).toEqual('someimageurl')
      student_id = res.body.student.id
})

  it('should get one student', async() => {
      const res = await request(server)
      .get(`/api/students/${student_id}`)
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('student')
  })


  it('should delete a student', async () => {
      console.log(student_id)
      const res = await request(server)
      .delete(`/api/students/${student_id}`)
      expect(res.statusCode).toEqual(204)
  })
})