const {server} = require('../index.js')
const request = require('supertest')
let student_id
let course_id

describe('Student Course Endpoints', () => {
  it('should get all student_courses', async() => {
    const res = await request(server)
    .get('/api/student_courses')
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('student_courses')
  })

  it('should create a new student_course', async () => {
      const res = await request(server)
      .post('/api/student_courses')
      .send({
          studentCourseInfo: {
            student_id: 1,
            course_id: 1,
            completion: 0,
            score: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          }
      })
      expect(res.statusCode).toEqual(201)
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('studentCourse')
      expect(res.body.studentCourse.score).toEqual(0)
      expect(res.body.studentCourse.completion).toEqual(0)
      expect(res.body.studentCourse.course_id).toEqual(1)
      expect(res.body.studentCourse.student_id).toEqual(1)
      student_id = res.body.studentCourse.course_id
      course_id = res.body.studentCourse.student_id
  })

  it('should get all student_courses for a course', async () => {
    const res = await request(server)
    .get(`/api/student_courses/course/${course_id}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body.course_student_info[0].course_id).toEqual(course_id)
  })

  it('should get one student_course', async () => {
    const res = await request(server)
    .get(`/api/student_courses/${course_id}/${student_id}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body.course_student_info.student_id).toEqual(student_id) 
    expect(res.body.course_student_info.course_id).toEqual(course_id) 
  })

  it('should delete a student_course', async () => {
      const res = await request(server)
      .delete(`/api/student_courses/${course_id}/${student_id}`)
      expect(res.statusCode).toEqual(204)
  })
})