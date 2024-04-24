const util = require('util');
const dbConfig = require("../../config/database/db_config");

// dbConfig.query를 프로미스로 변환
const query = util.promisify(dbConfig.query).bind(dbConfig);

// 회원가입 기능
const register = async (username, password)=>{
    const rows = await query('INSERT INTO user (username, pwd) VALUES (?, ?)', [username, password]);
    return rows;
};
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
// 비밀번호 변경 기능
const pwdChange = async(user_uid, hashedPassword) =>{
    await query('UPDATE user SET pwd = ? WHERE user_uid = ?', [hashedPassword, user_uid]);
}
// 회원 탈퇴 기능
const userdel = async (user_uid) => {
    // 사용자가 작성한 댓글 삭제
    await query('DELETE FROM comment WHERE user_uid = ?', [user_uid]);
    // 사용자가 작성한 게시글 삭제
    await query('DELETE FROM board WHERE user_uid = ?', [user_uid]);
    // user 정보 삭제
    await query('DELETE FROM user WHERE user_uid = ?', [user_uid]);
    return true;
};

// 마이페이지 기능 - 사용자 username과 가입 일자 조회
const userInfo = async (user_uid) => {
    const result = await query(`select username,DATE_FORMAT(joindate,'%Y.%m.%d') AS joindate from user where user_uid = ?`,user_uid);
    return result;
};
// 마이페이지 기능 - 사용자 작성 게시글 개수 조회
const myPostsCount = async (user_uid) => {
    const result = await query(`select count(*) as Count from board where user_uid = ?`,user_uid);
    return result;
};
// 마이페이지 기능 - 사용자 작성 댓글 개수 조회
const myCommentsCount = async (user_uid) => {
    const result = await query(`select count(*) as Count from comment where user_uid = ?`,user_uid);
    return result;
};
// 마이페이지 기능  - 사용자가 작성한 게시글 조회
const myPosts = async (user_uid) => {
    const result = await query(`select title, views,DATE_FORMAT(createdate,'%Y.%m.%d') AS createdate, board_uid from board where user_uid = ?`, user_uid);
    return result;
};

// 마이페이지 기능  - 사용자가 작성한 댓글 조회
const myComments = async (user_uid) => {
    const result = await query(`SELECT board_uid, 
    MAX(DATE_FORMAT(createdate,'%Y.%m.%d')) AS createdate
    FROM comment WHERE user_uid = ? GROUP BY board_uid`, user_uid);
    return result;

};
// 마이페이지 기능  - 사용자가 작성한 댓글 조회 추가 기능
const myCommentsAdd = async (board_uid) => {
    const result = await query(`SELECT COUNT(*) AS Count
    FROM comment
    WHERE user_uid = (
        SELECT user_uid
        FROM board
        WHERE board_uid = ?
    ) AND board_uid = ?`,[board_uid,board_uid]);
    const result2 = await query(`select title from board where board_uid = ?`, board_uid);
    return {result,result2};
};

module.exports = {register, findUsername, info, pwdChange, userdel, userInfo, myPostsCount, myCommentsCount, myPosts, myComments, myCommentsAdd};

