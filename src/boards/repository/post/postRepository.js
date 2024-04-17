const util = require('util');
const dbConfig = require("../../../config/database/db_config");

// dbConfig.query를 프로미스로 변환
const query = util.promisify(dbConfig.query).bind(dbConfig);

// 
const postList = async ()=>{
    const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate
    , title, views, board_uid FROM board WHERE enddate > CURDATE() ORDER BY createdate DESC`);
    return rows;
};
const popularList = async ()=>{
    const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate
    , title, views, board_uid FROM board WHERE enddate > CURDATE() ORDER BY views desc limit 4`);
    return rows;
};
const views = async (board_uid)=>{
    const rows = await query(`update board set views = views + 1 where board_uid = ?`,board_uid);
};
const detailview = async (board_uid)=>{
    const rows = await query(`select title,content,user_uid,DATE_FORMAT(createdate,'%Y.%m.%d') AS createdate,
    views,recruittype,progress,recruitmember,
    DATE_FORMAT(plan,'%Y.%m.%d') AS plan,contact,duration from board where board_uid = ?`,board_uid);
    const rows2 = await query(`select recruitfield from category where board_uid = ?`,board_uid);
    const rows3 = await query(`select language from useLanguage where board_uid = ?`,board_uid);
    const rows4 = await query(`select username from user where user_uid = ?`,rows[0].user_uid);
    return {rows,rows2,rows3,rows4};
};
const recruitfieldSerch = async (recruitfield)=>{
    console.log("rep : ",recruitfield);
    const rows = await query(`SELECT recruitfield, board_uid 
    FROM category 
    WHERE recruitfield = ?`,recruitfield);
    return rows;
};
const BoardUIDSerch = async (board_uid) =>{
    const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate, title, views, board_uid 
    FROM board WHERE enddate > CURDATE() AND board_uid = ?
    ORDER BY createdate DESC`,board_uid);
    return rows;
};
const Search = async (searchWord)=>{
    const likePattern = `%${searchWord}%`;
        const rows = await query(`SELECT recruitType, DATE_FORMAT(enddate,'%Y.%m.%d') AS enddate, title, views, board_uid  
        FROM board
        WHERE enddate > CURDATE() AND (title LIKE ? OR content LIKE ?)
        ORDER BY createdate DESC`, [likePattern, likePattern]);
    return rows;
};
module.exports = {postList,views,detailview,popularList,recruitfieldSerch,BoardUIDSerch,Search};