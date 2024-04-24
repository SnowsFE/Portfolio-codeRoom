const commentRep = require("../../repository/comment/commentRepository");

// 상세 페이지 조회 기능 - 댓글
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
const cmtwrite = async (boardUid, userUid, comment) => {
    const result = await commentRep.cmtwrite(boardUid, userUid, comment);
    return result;
}
// 댓글 수정
const cmtmodify = async (commentUid, content) => {
    return await commentRep.cmtmodify(commentUid, content);
}
// 댓글 삭제
const cmtdel = async (commentUid, userUid) => {
    return await commentRep.cmtdel(commentUid, userUid);
};

module.exports = { detailview,
    cmtwrite, cmtmodify, cmtdel };
