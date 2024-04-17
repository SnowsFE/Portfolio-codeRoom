const util = require('util');
const dbConfig = require("../../../config/database/db_config");

// dbConfig.query를 프로미스로 변환
const query = util.promisify(dbConfig.query).bind(dbConfig);

const detailview = async (board_uid)=>{
    const rows = await query(`select content,DATE_FORMAT(createdate,'%Y.%m.%d') AS createdate,
    user_uid from comment where board_uid = ?`,board_uid);
    return rows;
};
const usernameSerch = async (board_uid)=>{
    const rows = await query(`select username from user where user_uid = ?`,board_uid);
    
    return rows;
};
module.exports = {detailview,usernameSerch};