// util 모듈에서 promisify 함수를 가져옵니다.
const util = require('util');
const dbConfig = require("../../../config/database/db_config"); // 데이터베이스 설정 파일을 불러옵니다.

// dbConfig.query 메서드를 프로미스로 변환합니다.
const query = util.promisify(dbConfig.query).bind(dbConfig);

// 메인페이지 데이터 조회
const postList = async () => {
    const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate
    , title, views, board_uid FROM board WHERE enddate > CURDATE() ORDER BY createdate DESC`);
    return rows;
};
// 메인페이지 인기글 조회
const popularList = async () => {
    const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate
    , title, views, board_uid FROM board WHERE enddate > CURDATE() ORDER BY views desc limit 4`);
    return rows;
};
// 조회수 증가 로직
const views = async (board_uid) => {
    const rows = await query(`update board set views = views + 1 where board_uid = ?`, board_uid);
};
// 게시글 상세 조회
const detailview = async (board_uid) => {
    const rows = await query(`select title,content,user_uid,
    DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate,DATE_FORMAT(createdate,'%Y.%m.%d') AS createdate,
    views,recruittype,progress,recruitmember,
    contact,duration from board where board_uid = ?`, board_uid);
    const rows2 = await query(`select recruitfield from category where board_uid = ?`, board_uid);
    const rows3 = await query(`select language from useLanguage where board_uid = ?`, board_uid);
    const rows4 = await query(`select username from user where user_uid = ?`, rows[0].user_uid);
    return { rows, rows2, rows3, rows4 };
};
// 모집 포지션별 탭
const recruitfieldSerch = async (recruitfield) => {
    console.log("rep : ", recruitfield);
    const rows = await query(`SELECT recruitfield, board_uid 
    FROM category 
    WHERE recruitfield = ?`, recruitfield);
    return rows;
};
// 모집 포지션별 탭 게시글 uid 찾기 위한 로직
const BoardUIDSerch = async (board_uid) => {
    const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate, title, views, board_uid 
    FROM board WHERE enddate > CURDATE() AND board_uid = ?
    ORDER BY createdate DESC`, board_uid);
    return rows;
};
// 검색 기능
const Search = async (searchWord) => {
    const likePattern = `%${searchWord}%`;
    const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate, title, views, board_uid  
        FROM board
        WHERE enddate > CURDATE() AND (title LIKE ? OR content LIKE ?)
        ORDER BY createdate DESC`, [likePattern, likePattern]);
    return rows;
};
// 게시글 작성(board 데이블 insert)
const postwrite = async (postData, user_uid) => {
    const result = await query(`insert into board (title,content,views,enddate,recruittype,progress,recruitmember,duration,contact,user_uid) 
    values(?,?,0,?,?,?,?,?,?,?)`,
        [postData.title, postData.content, postData.enddate, postData.recruittype,
        postData.progress, postData.recruitmember, postData.duration, postData.contact, user_uid]);
    return result;
};
// category, uselanguage 데이블 board_uid를 찾기위한 함수
const postwriteuidsearch = async (postData, user_uid) => {
    const result = await query(`select board_uid from board where title =? and content =? and 
    enddate =? and recruittype =? and progress =? and 
    recruitmember =? and duration =? and contact =? and user_uid =?`,
        [postData.title, postData.content, postData.enddate, postData.recruittype,
        postData.progress, postData.recruitmember, postData.duration, postData.contact, user_uid]);
    return result[0].board_uid;
};
// 게시글 작성(category 데이블 insert)
const postwritecategories = async (postData, board_uid) => {
    const result = await query(`insert into category (recruitfield,board_uid) values (?,?)`,
        [postData, board_uid]);
    return result;
};
// 게시글 작성(uselanguage 데이블 insert)
const postwritelanguages = async (postData, board_uid) => {
    const result = await query(`insert into uselanguage (language,board_uid) values (?,?)`,
        [postData, board_uid]);
    return result;
};
// 게시글 작성
// const postwrite = async (postData, languages, categories) => {
//     const { title, content, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid } = postData;
//     const sql = `INSERT INTO board (title, content, views, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid) VALUES (?, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


//     // 변환된 query 함수를 사용하여 데이터베이스에 쿼리를 실행합니다.
//     const result = await query(sql, [title, content, startdate, enddate, recruittype, progress, recruitmember, plan, duration, contact, user_uid]);
//     const boardUid = result.insertId;

//     // useLanguage와 category 테이블에 데이터 저장
//     const languageSql = `INSERT INTO useLanguage (language, board_uid) VALUES ?`;
//     const categorySql = `INSERT INTO category (recruitfield, board_uid) VALUES ?`;

//     const languageValues = languages.map(language => [language, boardUid]);
//     const categoryValues = categories.map(category => [category, boardUid]);

//     await query(languageSql, [languageValues]);
//     await query(categorySql, [categoryValues]);

//     return result;
// }
// 게시글 수정
const postmodify = async (boardUid, postData, languages, categories) => {
    const { title, content, enddate, recruittype, progress, recruitmember, duration, contact, user_uid } = postData;
    const sql = `UPDATE board SET title = ?, content = ?, enddate = ?, recruittype = ?, progress = ?, recruitmember = ?, duration = ?, contact = ?, user_uid = ? WHERE board_uid = ?`;

    await query(sql, [title, content, enddate, recruittype, progress, recruitmember, duration, contact, user_uid, boardUid]);

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
const postdel = async (boardUid) => {
    await query("DELETE FROM useLanguage WHERE board_uid = ?", [boardUid]);
    await query("DELETE FROM category WHERE board_uid = ?", [boardUid]);
    const sql = `DELETE FROM board WHERE board_uid = ?`;
    const result = await query(sql, [boardUid]);
    return result;
}
// 게시글 작성자 정보 조회 기능 추가
const getPostOwner = async (boardUid) => {
    const sql = `SELECT user_uid FROM board WHERE board_uid = ?`;
    const result = await query(sql, [boardUid]);
    return result.length > 0 ? result[0].user_uid : null;
}

module.exports = {
    postList, views, detailview, popularList, recruitfieldSerch, BoardUIDSerch, Search,
    postwrite, postmodify, postdel, postwriteuidsearch, postwritelanguages, postwritecategories, getPostOwner
};
