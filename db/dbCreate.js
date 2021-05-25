var pgtools = require('pgtools')
const config = {
    user: "postgres",
    host: "localhost",
    password: "1234",
    port: 5432
}

let createdb = () => {
    console.log('ran')
    pgtools.createdb(config, "newdb", function(err, res) {
        if (err) {
          console.error(err);
          process.exit(-1);
        }
        console.log(res);
    });
}

module.exports = {
    createdb
}

require('make-runnable')