const {server} = require('../index.js')
const request = require('supertest')
const models = require('../models')

describe('Auth Endpoints', () => {

    it('should return a JSON object with valid token on legitimate login', async () => {
        models.Admin.findOne().then(async(response) => {
            console.log(response)
            let currentPassword = response.dataValues.password
            let currentUserName = response.dataValues.username 
            console.log(currentPassword, currentUserName)
            const res = await request(server)
            .post('/api/login')
            .send({
                username: currentUserName,
                password: currentPassword
            })
            expect(res.body.success).toEqual(true)
            expect(res.body.message).toEqual('Authorization successful!')
            expect(res.body).toHaveProperty('token')
        })
    })

    it('should return a failure message if username is not found', async () => {
        const res = await request(server)
        .post('/api/login')
        .send({
            username: 'admi',
            password: 'password'
        })
        expect(res.body.success).toEqual(false)
        expect(res.body.message).toEqual('User with this username does not exist!')

    })

    it('should return a failure message if password is wrong', async () => {
        const res = await request(server)
        .post('/api/login')
        .send({
            username: 'admin',
            password: 'passwor'
        })
        expect(res.body.success).toEqual(false)
        expect(res.body.message).toEqual("Passwords do not match!")

    })

    // it('should verify token', async () => {
    //     const res = await request(server)
    //     .post('/api/login')
    //     .send({
    //         username: 'admin',
    //         password: 'password'
    //     })
    //     console.log(res)
    // })
})