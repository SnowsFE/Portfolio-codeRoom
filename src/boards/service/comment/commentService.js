const commentRep = require("../../repository/comment/commentRepository");

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

module.exports = { write, modify, del };