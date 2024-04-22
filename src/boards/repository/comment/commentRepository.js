// util 모듈에서 promisify 함수를 가져옵니다.
const util = require('util');
const dbConfig = require("../../../config/database/db_config"); // 데이터베이스 설정 파일을 불러옵니다.

// dbConfig.query 메서드를 프로미스로 변환합니다.
const query = util.promisify(dbConfig.query).bind(dbConfig);

// 게시글 상세 조회 기능 - 댓글
const detailview = async (board_uid)=>{
    const rows = await query(`select content,DATE_FORMAT(createdate,'%Y.%m.%d') AS createdate,
    user_uid from comment where board_uid = ?`,board_uid);
    return rows;
};
// 댓글 상세 조회 시 유저네임 찾기 
const usernameSerch = async (board_uid)=>{
    const rows = await query(`select username from user where user_uid = ?`,board_uid);
    
    return rows;
};

// 댓글 작성
const cmtwrite = async (boardUid, userUid, comment) => {
    const sql = `INSERT INTO comment (board_uid, user_uid, content) VALUES (?, ?, ?)`;
    const result = await query(sql, [boardUid, userUid, comment]);
    return result;
}
// 댓글 수정
const cmtmodify = async (commentUid, content) => {
    const sql = `UPDATE comment SET content = ? WHERE comment_uid = ?`;
    const result = await query(sql, [content, commentUid]);
    return result;
}
// 댓글 삭제
const cmtdel = async (commentUid, userUid) => {
    const sql = "DELETE FROM comment WHERE comment_uid = ? AND user_uid = ?"; // 댓글 UID와 사용자 UID를 모두 확인
    const result = await query(sql, [commentUid, userUid]);
    return result;
};

module.exports = { detailview,usernameSerch,
    cmtwrite, cmtmodify, cmtdel };
