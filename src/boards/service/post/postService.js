const postRep = require("../../repository/post/postRepository");

// 메인페이지 데이터 조회 기능
const postList = async () =>{
    const result = await postRep.postList();
    return result;
};
// 메인페이지 인기글 조회 기능
const popularList = async () =>{
    const result = await postRep.popularList();
    return result;
};
// 상세 페이지 조회 기능
const detailview = async (board_uid) =>{
    await postRep.views(board_uid);
    
    const result = await postRep.detailview(board_uid);
    const integratedData = result.rows.map(row => {
        return {
            title: row.title,
            content: row.content,
            createdate: row.createdate,
            username: result.rows4[0].username,
            views: row.views,
            recruittype: row.recruittype,
            progress: row.progress,
            recruitmember: row.recruitmember,
            plan: row.plan,
            contact: row.contact,
            duration: row.duration,
            recruitFields: result.rows2.map(r2 => r2.recruitfield), // 'rows2'에서 모든 'recruitfield'를 추출하여 배열로 저장
            languages: result.rows3.map(r3 => r3.language) // 'rows3'에서 모든 'language'를 추출하여 배열로 저장
            
        };
    });
    return integratedData;
};
// 모집 포지션별 탭 조회 기능
const recruitfieldSerch = async (recruitfield)=>{
    const result = await postRep.recruitfieldSerch(recruitfield);
    let integratedData = [];
    for(let i = 0 ; i < result.length ; i++){
        const boardResult = await postRep.BoardUIDSerch(result[i].board_uid);
        integratedData[i] = {"recruitType": boardResult[0].recruitType,"enddate": boardResult[0].enddate,
        "title": boardResult[0].title,"views": boardResult[0].views,
        "board_uid": boardResult[0].board_uid};
    }
    return integratedData;
};
// 검색 기능 로직
const Search = async (searchWord)=>{
    const result = await postRep.Search(searchWord);
    return result;
};

// 게시글 작성
const postwrite = async (postData, languages, categories) => {
    const result = await postRep.postwrite(postData, languages, categories);
    return result;
}
// 게시글 수정
const postmodify = async (boardUid, postData, languages, categories) => {
    const result = await postRep.postmodify(boardUid, postData, languages, categories);
    return result;
}
// 게시글 삭제
const postdel = async (boardUid) => {
    const result = await postRep.postdel(boardUid);
    return result;
}

module.exports = { postList,detailview,popularList,recruitfieldSerch,Search,
    postwrite, postmodify, postdel };