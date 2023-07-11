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
            pool.close();
        })
    }).catch((err) => {
        console.log('Lỗi kết nối:', err);
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
            pool.close();
        })
    }).catch((err) => {
        console.log('Lỗi kết nối:', err);
    });
}

async function getUserByEmail(email){
    try {
        const searchUserByEmail = "getInfoUserByEmail";
        const connection = await pool.connect();
        const request = connection.request();
        request.input('EmailUser', sql.NVarChar, email);
        const result = await request.execute(searchUserByEmail);
        const userStore = result.recordset;
        connection.close();
        return userStore;
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }
}

async function getDataForUser(){
    try {
        const getDataForUser = "getDataForUser";
        const connection = await pool.connect();
        const request = connection.request();
        const result = await request.execute(getDataForUser);
        const userStore = result;
        console.log('userStore : ' + userStore)
        connection.close();
        return userStore;
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

async function insertSessionUser(sessionId,userID,maxAge,expired){
    const insertSession = "insertSessionQuery"
    pool.connect(async function (err, connection) {
        if (err) {
            console.log('Lỗi kết nối:', err);
        }
        const request = connection.request();
        request.input('sessionId', sql.NVarChar, sessionId);
        request.input('userID', sql.NVarChar, userID);
        request.input('duration', sql.NVarChar, maxAge);
        request.input('expired', sql.NVarChar, expired);
        
        request.execute(insertSession).then((result) => {
            return true;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            pool.close();
            return false;
        });
    })
}

async function deleteSessionUser(sessionId){
    const deleteSessionUser = "insertSessionQuery"
    pool.connect(async function (err, connection) {
        if (err) {
            console.log('Lỗi kết nối:', err);
        }
        const request = connection.request();
        request.input('sessionId', sql.NVarChar, sessionId);
        
        request.execute(deleteSessionUser).then((result) => {
            return true;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            pool.close();
            return false;
        });
    })
}

async function deleteSessionUserById(userId){
    const deleteSessionUser = "deleteSessionUserById"
    pool.connect(async function (err, connection) {
        if (err) {
            console.log('Lỗi kết nối:', err);
        }
        const request = connection.request();
        request.input('userID', sql.NVarChar, userId);
        request.execute(deleteSessionUser).then((result) => {
            pool.close();
            console.log(123)
            return true;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            pool.close();
            return false;
        });
    })
}

async function getSessionUser(userId){
    try {
        const getSessionUser = "getSessionUserId"
        const connection = await pool.connect();
        const request = connection.request();
        request.input('userID', sql.NVarChar, userId);
        const result = await request.execute(getSessionUser);
        const userStore = result.recordset;
        connection.close();
        return userStore;
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }
}

module.exports ={getAll,getUserByEmail,getUserById,insertInfoUser,insertSessionUser,deleteSessionUser,getSessionUser,deleteSessionUserById,getDataForUser};
