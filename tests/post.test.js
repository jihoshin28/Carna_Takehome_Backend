const {server} = require('../index.js')
const request = require('supertest')
let post_id

describe('Post Endpoints', () => {
  it('should get all posts', async() => {
    const res = await request(server)
    .get('/api/posts')
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('posts')
  })

  it('should create a new post', async () => {
    const res = await request(server)
    .post('/api/posts')
    .send({
      student_id: 1,
      forum_id: 1,
      title: "Title",
      content: "Content",
      createdAt: new Date(),
      updatedAt: new Date()
      
    })
    expect(res.statusCode).toEqual(201)
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('post')
    expect(res.body.post.title).toEqual('Title')
    expect(res.body.post.content).toEqual('Content')
    post_id = res.body.post.id
  })

  it('should get one post', async() => {
      const res = await request(server)
      .get(`/api/posts/${post_id}`)
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('post')
  })

  it('should delete a post', async () => {
      console.log(post_id)
      const res = await request(server)
      .delete(`/api/posts/${post_id}`)
      expect(res.statusCode).toEqual(204)
  })

})