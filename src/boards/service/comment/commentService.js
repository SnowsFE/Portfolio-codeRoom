const commentRep = require("../../repository/comment/commentRepository");

const detailview = async (board_uid) =>{
    const result = await commentRep.detailview(board_uid);
    let integratedData = [];
    for(let i = 0 ; i < result.length ; i++){
        const userResult = await commentRep.usernameSerch(result[i].user_uid);
        integratedData[i] = {"content": result[i].content,"createdate": result[i].createdate,"username": userResult[0].username};
    }
    return integratedData;
}

// 댓글 작성
const write = async (boardUid, userUid, content) => {
    const result = await commentRep.write(boardUid, userUid, content);
    return result;
}

// 댓글 수정
const modify = async (commentUid, content) => {
    return await commentRep.modify(commentUid, content);
}

// 댓글 삭제
const del = async (commentUid, userUid) => {
    return await commentRep.del(commentUid, userUid);
};

module.exports = { detailview,
    write, modify, del };
