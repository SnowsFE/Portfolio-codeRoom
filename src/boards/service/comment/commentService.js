const cmtRep = require("../../repository/comment/commentRepository");

const detailview = async (board_uid) =>{
    const result = await cmtRep.detailview(board_uid);
    let integratedData = [];
    for(let i = 0 ; i < result.length ; i++){
        const userResult = await cmtRep.usernameSerch(result[i].user_uid);
        integratedData[i] = {"content": result[i].content,"createdate": result[i].createdate,"username": userResult[0].username};
    }
    return integratedData;
}

module.exports = {detailview};