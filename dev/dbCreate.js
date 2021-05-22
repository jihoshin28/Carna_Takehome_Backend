var pgtools = require('pgtools')
const config = {
    user: "allenshin",
    host: "localhost",
    password: "jeeho123",
    port: 5432
}


let createdb = async () => {
    await pgtools.createdb(config, "carna", function(err, res) {
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