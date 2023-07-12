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
        connection.close();
        return result.recordset;
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }
}

async function getDataForUser(email){
    try {
        const getDataForUser = "getDataForUser";
        const connection = await pool.connect();
        const request = connection.request();
        request.input('emailUser', sql.NVarChar, email);
        const result = await request.execute(getDataForUser);
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
    
        request.execute(insertQuery).then((result) => {
            connection.close();
            return true;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            pool.close();
            return false;
        });
        
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }

}

async function insertSessionUser(sessionId, userID, maxAge, expired) {
    try {
        const insertSession = "insertSessionQuery";
        const connection = await pool.connect();
        const request = connection.request();
        request.input('sessionId', sql.NVarChar, sessionId);
        request.input('userID', sql.NVarChar, userID);
        request.input('duration', sql.NVarChar, maxAge);
        request.input('expired', sql.NVarChar, expired);
    
        const result = await request.execute(insertSession);
        connection.close();
        return true;
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        return false;
    }
}

async function deleteSessionUser(sessionId){
    try {
        const deleteSessionUser = "insertSessionQuery"
        const connection = await pool.connect();
        const request = connection.request();
        request.input('sessionId', sql.NVarChar, sessionId);
    
        request.execute(deleteSessionUser).then((result) => {
            connection.close();
            return true;
        }).catch((err) => {
            console.log('Lỗi thực thi stored procedure:', err);
            pool.close();
            return false;
        });
        
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }

}

async function deleteSessionUserById(userId){
    try {
        const deleteSessionUser = "deleteSessionUserById"
        const connection = await pool.connect();
        const request = connection.request();
        request.input('userID', sql.NVarChar, userId);
        const result = await request.execute(deleteSessionUser);
        connection.close();
        return result;
    } catch (err) {
        console.log('Lỗi thực thi stored procedure:', err);
        throw err;
    }
}

async function getSessionUserById(userId){
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

module.exports ={getAll,getUserById,getUserByEmail,getDataForUser,getSessionUserById,insertInfoUser,insertSessionUser,deleteSessionUser,deleteSessionUserById};
