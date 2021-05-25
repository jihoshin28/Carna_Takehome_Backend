const {server} = require('../index.js')
const request = require('supertest')

describe('Teacher Endpoints', () => {
  it('should get all teachers', async() => {
    const res = await request(server)
    .get('/api/teachers')
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('teachers')
  })

  it('should create a new teacher', async () => {
      const res = await request(server)
      .post('/api/teachers')
      .send({
          teacherInfo: {
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
      expect(res.body).toHaveProperty('teacher')
      expect(res.body.teacher.first_name).toEqual('First')
      expect(res.body.teacher.last_name).toEqual('Last')
      expect(res.body.teacher.email).toEqual('someemail@gmail.com')
      expect(res.body.teacher.image).toEqual('someimageurl')
      teacher_id = res.body.teacher.id
})

  it('should get one teacher', async() => {
      const res = await request(server)
      .get(`/api/teachers/${teacher_id}`)
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('teacher')
  })


  it('should delete a teacher', async () => {
      console.log(teacher_id)
      const res = await request(server)
      .delete(`/api/teachers/${teacher_id}`)
      expect(res.statusCode).toEqual(204)
  })
})