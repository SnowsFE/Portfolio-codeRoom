const util = require('util');
const dbConfig = require("../../config/database/db_config");

// dbConfig.query를 프로미스로 변환
const query = util.promisify(dbConfig.query).bind(dbConfig);

// 회원가입 기능
const register = async (username, password)=>{
    const rows = await query('INSERT INTO user (username, pwd) VALUES (?, ?)', [username, password]);
    return rows;
}

// 아이디로 정보 찾기
const findUsername = async (username) => {
    const rows = await query('SELECT * FROM user WHERE username = ?', [username]);
    return rows[0];
};

// 회원 정보 조회 기능
const info = async (user_uid) => {
    const rows = await query('SELECT * FROM user WHERE user_uid = ?', [user_uid]);
    return rows[0];
}
module.exports = {register, findUsername, info};