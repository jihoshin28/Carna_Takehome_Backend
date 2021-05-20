const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.send('Welcome snowflake'))

module.exports = router