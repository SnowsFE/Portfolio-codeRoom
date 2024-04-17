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
};

// 회원 정보 수정 기능
const modify = async(user_uid, hashedPassword) =>{
    await query('UPDATE user SET pwd = ? WHERE user_uid = ?', [hashedPassword, user_uid]);
}

// 회원 탈퇴 기능
const del = async (user_uid) => {
    // board 정보 먼저 삭제
    await query('DELETE FROM board WHERE user_uid = ?', [user_uid]);
    // user 정보 삭제
    await query('DELETE FROM user WHERE user_uid = ?', [user_uid]);
    return true;
};

// 마이페이지 기능 1 - 사용자가 작성한 게시글 조회
const myPosts = async (user_uid) => {
    const posts = await query('SELECT * FROM board WHERE user_uid = ?', [user_uid]);
    return posts;
};

// 마이페이지 기능 2 - 사용자가 작성한 댓글 조회
const myComments = async (user_uid) => {
    const comments = await query('SELECT * FROM comment WHERE user_uid = ?', [user_uid]);
    return comments;
};


module.exports = {register, findUsername, info, modify, del, myPosts, myComments};