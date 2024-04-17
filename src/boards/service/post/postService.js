const postRep = require("../../repository/post/postRepository");

// 게시글 작성
const write = async (postData, languages, categories) => {
    const result = await postRep.write(postData, languages, categories);
    return result;
}

// 게시글 수정
const modify = async (boardUid, postData, languages, categories) => {
    const result = await postRep.modify(boardUid, postData, languages, categories);
    return result;
}

// 게시글 삭제
const del = async (boardUid) => {
    const result = await postRep.del(boardUid);
    return result;
}

module.exports = { write, modify, del };