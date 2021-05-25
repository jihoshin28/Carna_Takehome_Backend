const {server} = require('../index.js')
const request = require('supertest')
let course_id

describe('Course Endpoints', () => {
    it('should get all courses', async() => {
        const res = await request(server)
        .get('/api/courses')
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('courses')
    })

    it('should create a new course', async () => {
        const res = await request(server)
        .post('/api/courses')
        .send({
            courseInfo: {
                teacher_id: 1,
                subject: "biology",
                image: "someimageurl",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })
        expect(res.statusCode).toEqual(201)
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('course')
        expect(res.body.course.subject).toEqual('biology')
        expect(res.body.course.image).toEqual('someimageurl')
        expect(res.body.course.teacher_id).toEqual(1)
        course_id = res.body.course.id
    })

    it('should get one course', async() => {
        const res = await request(server)
        .get(`/api/courses/${course_id}`)
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('course')
    })


    it('should delete a course', async () => {
        console.log(course_id)
        const res = await request(server)
        .delete(`/api/courses/${course_id}`)
        expect(res.statusCode).toEqual(204)
    })
})