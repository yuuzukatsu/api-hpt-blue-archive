let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6516518',
    password: 'bk1Mtz4dR6',
    database: 'sql6516518'
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }
})

module.exports = connection;