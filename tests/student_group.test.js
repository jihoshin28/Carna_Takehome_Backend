const {server} = require('../index.js')
const request = require('supertest')
let group_id
let student_id

describe('Student Course Endpoints', () => {
  it('should get all student_groups', async() => {
    const res = await request(server)
    .get('/api/student_groups')
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('student_groups')
  })

  it('should create a new student_group', async () => {
      const res = await request(server)
      .post('/api/student_groups')
      .send({
          studentGroupInfo: {
            student_id: 1,
            group_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
      })
      expect(res.statusCode).toEqual(201)
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('studentGroup')
      expect(res.body.studentGroup.group_id).toEqual(1)
      expect(res.body.studentGroup.student_id).toEqual(1)
      group_id = res.body.studentGroup.group_id
      student_id = res.body.studentGroup.student_id
  })

  it('should delete a student_group', async () => {
      const res = await request(server)
      .delete(`/api/student_groups/${group_id}/${student_id}`)
      expect(res.statusCode).toEqual(204)
  })
})