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

    
//     // Kết nối thành công, bạn có thể thực hiện các thao tác CRUD ở đây
//     const selectQuery = "SELECT * FROM Role";
//     sql.query(selectQuery, function (err, result) {
//     if (err) {
//         console.log('Lỗi khi truy vấn dữ liệu:', err);
//         return;
//     }
//     console.log(result);
//     console.log('Kết quả truy vấn:', result.recordset);
//     });
    

//   });

function runQuery(query) {
    // sql.connect() will return the existing global pool if it exists or create a new one if it doesn't
    return sql.connect(config).then((pool) => {
        return pool.query(query)
    })
}
module.exports = config
