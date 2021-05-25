const {server} = require('../index.js')
const request = require('supertest')
let forum_id

describe('Forum Endpoints', () => {
  it('should get all forums', async() => {
    const res = await request(server)
    .get('/api/forums')
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('forums')
  })

  it('should create a new forum', async () => {
      const res = await request(server)
      .post('/api/forums')
      .send({
          forumInfo: {
              group_id: 1,
              type: "discuss",
              image: "someimageurl",
              createdAt: new Date(),
              updatedAt: new Date()
          }
      })
      expect(res.statusCode).toEqual(201)
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('forum')
      expect(res.body.forum.type).toEqual('discuss')
      expect(res.body.forum.image).toEqual('someimageurl')
      expect(res.body.forum.group_id).toEqual(1)
      forum_id = res.body.forum.id
})

  it('should get one forum', async() => {
      const res = await request(server)
      .get(`/api/forums/${forum_id}`)
      expect(res.statusCode).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('forum')
  })


  it('should delete a forum', async () => {
      console.log(forum_id)
      const res = await request(server)
      .delete(`/api/forums/${forum_id}`)
      expect(res.statusCode).toEqual(204)
  })
})