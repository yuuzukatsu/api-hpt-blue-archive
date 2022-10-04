let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6524063',
    password: 'su3KB4XPsf',
    database: 'sql6524063'
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }
})

module.exports = connection;
