// util 모듈에서 promisify 함수를 가져옵니다.
const util = require('util');
const dbConfig = require("../../../config/database/db_config"); // 데이터베이스 설정 파일을 불러옵니다.

// dbConfig.query 메서드를 프로미스로 변환합니다.
const query = util.promisify(dbConfig.query).bind(dbConfig);

// 댓글 작성
const write = async (boardUid, userUid, content) => {
    const sql = `INSERT INTO comment (board_uid, user_uid, content) VALUES (?, ?, ?)`;
    const result = await query(sql, [boardUid, userUid, content]);
    return result;
}

// 댓글 수정
const modify = async (commentUid, content) => {
    const sql = `UPDATE comment SET content = ? WHERE comment_uid = ?`;
    const result = await query(sql, [content, commentUid]);
    return result;
}

// 댓글 삭제
const del = async (commentUid, userUid) => {
    const sql = "DELETE FROM comment WHERE comment_uid = ? AND user_uid = ?"; // 댓글 UID와 사용자 UID를 모두 확인
    const result = await query(sql, [commentUid, userUid]);
    return result;
};

module.exports = { write, modify, del };