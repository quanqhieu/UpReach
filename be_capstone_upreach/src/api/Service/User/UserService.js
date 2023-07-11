const sql = require('mssql');

const config = require('../../Config/dbConfig');

const pool = new sql.ConnectionPool(config);

async function getAll(){
    const getUsers = "getAllUser";
    pool.connect().then(() => {
        const request = pool.request();
        request.execute(getUsers).then((result) => {
            return result.recordset;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            res.json({ message: "Lỗi khi xử lý câu lệnh: " + err });
            pool.close();
        })
    }).catch((err) => {
        console.log('Lỗi kết nối:', err);
        res.json({ message: "Lỗi kết nối: " + err });
    });
}

async function getUserById(id){
    const searchUserById = "getInfoUserById";
    pool.connect().then(() => {
        const request = pool.request();
        request.input('EmailId', sql.NVarChar, id);
        request.execute(searchUserById).then((result) => {
            return result.recordset;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            res.json({ message: "Lỗi khi xử lý câu lệnh: " + err });
            pool.close();
        })
    }).catch((err) => {
        console.log('Lỗi kết nối:', err);
        res.json({ message: "Lỗi kết nối: " + err });
    });
}

async function getUserByEmail(email){
    try {
        const searchUserByEmail = "getInfoUserByEmail";
        const connection = await pool.connect();
        const request = connection.request();
        request.input('EmailUser', sql.NVarChar, email);
        const result = await request.execute(searchUserByEmail);
        console.log(result.recordset);
        connection.close();
        return result.recordset;
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }
}

async function insertInfoUser(id, role, email, password){
    try {
        const insertQuery = "InsertInfoUser";
        const connection = await pool.connect();
        const request = connection.request();
        request.input('UserId', sql.NVarChar, id);
        request.input('UserRole', sql.NVarChar, role);
        request.input('UserEmail', sql.NVarChar, email);
        request.input('UserPassword', sql.NVarChar, password);
        
        const result = await request.execute(insertQuery);
        connection.close();
        return true;
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }
}

async function insertSessionUser(sessionId,maxAge,expiry){
    const insertSession = "insertSessionQuery"
    pool.connect(async function (err, connection) {
        if (err) {
            console.log('Lỗi kết nối:', err);
            return res.json({ message: "Lỗi kết nối: " + err });
        }
        const request = connection.request();
        request.input('sessionId', sql.NVarChar, sessionId);
        request.input('maxAge', sql.NVarChar, maxAge);
        request.input('expiry', sql.NVarChar, expiry);
        
        request.execute(insertSession).then((result) => {
            return true;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            res.json({ message: "Lỗi thực thi stored procedure: " + err });
            pool.close();
            return false;
        });
    })
}

module.exports ={getAll,getUserByEmail,getUserById,insertInfoUser,insertSessionUser};
