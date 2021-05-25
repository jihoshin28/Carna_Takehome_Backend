const {server} = require('../index.js')
const request = require('supertest')

describe('Admin Endpoints', () => {

    it('should update admin', async () => {
        const res = await request(server)
        .put(`/api/admin/2`)
        .send({
            username: 'admin',
            password: 'password'
        })
        expect(res.status).toEqual(200)
        expect(res.body.updatedAdmin.username).toEqual('admin')
        expect(res.body.updatedAdmin.password).toEqual('password')
    })


})
