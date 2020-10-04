const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node_mysql'
});
connection.connect( err => {
    if (err) throw err;
    console.log('Database server Running');
});
module.exports = connection;