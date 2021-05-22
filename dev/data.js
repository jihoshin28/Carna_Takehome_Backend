const pool = require('./pool')

pool.connect((err, client, done) => {
    if(err) throw err;
    client.query('SELECT * FROM Students', (err, res) => {
        if(err){
            console.log(err.stack)
        } else {
            console.log(res.rows)
        }
        pool.end()
    })
} )