let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6503536',
    password: 'AFhXz41LZc',
    database: 'sql6503536'
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }
})

module.exports = connection;