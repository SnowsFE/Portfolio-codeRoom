// util 모듈에서 promisify 함수를 가져옵니다.
const util = require('util');
const dbConfig = require("../../../config/database/db_config"); // 데이터베이스 설정 파일을 불러옵니다.

// dbConfig.query 메서드를 프로미스로 변환합니다.
const query = util.promisify(dbConfig.query).bind(dbConfig);

// 게시글 작성
const write = async (postData, languages, categories) => {
    const { title, content, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid } = postData;
    const sql = `INSERT INTO board (title, content, views, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid) VALUES (?, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


    // 변환된 query 함수를 사용하여 데이터베이스에 쿼리를 실행합니다.
    const result = await query(sql, [title, content, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid]);
    const boardUid = result.insertId;

    // useLanguage와 category 테이블에 데이터 저장
    const languageSql = `INSERT INTO useLanguage (language, board_uid) VALUES ?`;
    const categorySql = `INSERT INTO category (recruitfield, board_uid) VALUES ?`;

    const languageValues = languages.map(language => [language, boardUid]);
    const categoryValues = categories.map(category => [category, boardUid]);

    await query(languageSql, [languageValues]);
    await query(categorySql, [categoryValues]);

    return result;
}

// 게시글 수정
const modify = async (boardUid, postData, languages, categories) => {
    const { title, content, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid } = postData;
    const sql = `UPDATE board SET title = ?, content = ?, startdate = ?, enddate = ?, recruittype = ?, progress = ?, recruitmember = ?, plan = ?, duration = ?, contact = ?, user_uid = ? WHERE board_uid = ?`;

    await query(sql, [title, content, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid, boardUid]);

    // useLanguage와 category 테이블 데이터 업데이트 로직 추가
    const deleteLanguageSql = `DELETE FROM useLanguage WHERE board_uid = ?`;
    const deleteCategorySql = `DELETE FROM category WHERE board_uid = ?`;
    await query(deleteLanguageSql, [boardUid]);
    await query(deleteCategorySql, [boardUid]);

    const languageSql = `INSERT INTO useLanguage (language, board_uid) VALUES ?`;
    const categorySql = `INSERT INTO category (recruitfield, board_uid) VALUES ?`;
    const languageValues = languages.map(language => [language, boardUid]);
    const categoryValues = categories.map(category => [category, boardUid]);
    await query(languageSql, [languageValues]);
    await query(categorySql, [categoryValues]);

    return { affectedRows: 1 }; // 예시 반환 값
}

// 게시글 삭제
const del = async (boardUid) => {
    await query("DELETE FROM useLanguage WHERE board_uid = ?", [boardUid]);
  await query("DELETE FROM category WHERE board_uid = ?", [boardUid]);
    const sql = `DELETE FROM board WHERE board_uid = ?`;
    const result = await query(sql, [boardUid]);
    return result;
}

module.exports = { write, modify, del };
