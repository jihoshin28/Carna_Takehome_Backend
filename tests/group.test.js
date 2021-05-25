const {server} = require('../index.js')
const request = require('supertest')

describe('Group Endpoints', () => {
  it('should get all groups', async() => {
    const res = await request(server)
    .get('/api/groups')
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('groups')
  })

  it('should create a new group', async () => {
      const res = await request(server)
      .post('/api/groups')
      .send({
          groupInfo: {
              name: "Some Group",
              type: "social",
              image: "someimageurl",
              createdAt: new Date(),
              updatedAt: new Date()
          }
      })
      expect(res.statusCode).toEqual(201)
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('group')
      expect(res.body.group.type).toEqual('social')
      expect(res.body.group.image).toEqual('someimageurl')
      expect(res.body.group.name).toEqual("Some Group")
      group_id = res.body.group.id
})

  it('should get one group', async() => {
      const res = await request(server)
      .get(`/api/groups/${group_id}`)
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('group')
  })


  it('should delete a group', async () => {
      console.log(group_id)
      const res = await request(server)
      .delete(`/api/groups/${group_id}`)
      expect(res.statusCode).toEqual(204)
  })
})