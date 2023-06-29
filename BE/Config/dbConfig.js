const sql = require('mssql');

//config for database
const config = {
    user: 'sa',
    password: '123456',
    server: '26.208.54.35',
    database: 'UpReachDB',
    options: {
        encrypt: false,
        trustedconnection: true,
        enableArithAort: true,
        trustServerCertificate: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433,
}

// sql.connect(config, function (err) {
//     if (err) {
//       console.log('Lỗi kết nối:', err);
//       return;
//     }
//     console.log("Connect Sucess !!")

// function runQuery(query) {
//     // sql.connect() will return the existing global pool if it exists or create a new one if it doesn't
//     return sql.connect(config).then((pool) => {
//         return pool.query(query)
//     })
// }
//Connect DB
// const pool = new sql.ConnectionPool(config);
module.exports = config
