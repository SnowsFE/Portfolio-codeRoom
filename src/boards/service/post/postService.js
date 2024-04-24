const postRep = require("../../repository/post/postRepository");

// 메인페이지 데이터 조회 기능
const postList = async () =>{
    let integratedData = [];
    const result = await postRep.postList();
    for(let i = 0 ; i < result.length ; i++){
        if(result[i].recruitType == '프로젝트'){
            integratedData[i] ={
                "recruitType": "🎥 "+result[i].recruitType,
                "Newbread": "🍞 따끈따끈 새 글",
                "enddate": result[i].enddate,
                "title": result[i].title,
                "views": result[i].views,
                "board_uid": result[i].board_uid
               }
        }else{
            integratedData[i] ={
                "recruitType": "✏️ "+result[i].recruitType,
                "Newbread": "🍞 따끈따끈 새 글",
                "enddate": result[i].enddate,
                "title": result[i].title,
                "views": result[i].views,
                "board_uid": result[i].board_uid
               }
        }
        
    };
    return integratedData;
};
// 메인페이지 인기글 조회 기능
const popularList = async () =>{
    let integratedData = [];
    const result = await postRep.popularList();
    for(let i = 0 ; i < result.length ; i++){
        if(result[i].recruitType == '프로젝트'){
            integratedData[i] ={
                "recruitType": "🎥 "+result[i].recruitType,
                "enddate": result[i].enddate,
                "title": result[i].title,
                "views": result[i].views,
                "board_uid": result[i].board_uid
               }
        }else{
            integratedData[i] ={
                "recruitType": "✏️ "+result[i].recruitType,
                "enddate": result[i].enddate,
                "title": result[i].title,
                "views": result[i].views,
                "board_uid": result[i].board_uid
               }
        }
        
    };
    return integratedData;
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
            enddate: row.enddate,
            username: result.rows4[0].username,
            views: row.views,
            recruittype: row.recruittype,
            progress: row.progress,
            recruitmember: row.recruitmember,
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
        if(boardResult[0].recruitType == '프로젝트'){
            integratedData[i] = {
            "recruitType": "🎥 "+boardResult[0].recruitType,
            "Newbread": "🍞 따끈따끈 새 글",
            "enddate": boardResult[0].enddate,
            "title": boardResult[0].title,
            "views": boardResult[0].views,
            "board_uid": boardResult[0].board_uid};
        }else{
            integratedData[i] = {
            "recruitType": "✏️ "+boardResult[0].recruitType,
            "Newbread": "🍞 따끈따끈 새 글",
            "enddate": boardResult[0].enddate,
            "title": boardResult[0].title,
            "views": boardResult[0].views,
            "board_uid": boardResult[0].board_uid};
        }
        
    }
    return integratedData;
};
// 검색 기능 로직
const Search = async (searchWord)=>{
    let integratedData = [];
    const result = await postRep.Search(searchWord);
    for(let i = 0 ; i < result.length ; i++){
        if(result[i].recruitType == '프로젝트'){
            integratedData[i] ={
                "recruitType": "🎥 "+result[i].recruitType,
                "Newbread": "🍞 따끈따끈 새 글",
                "enddate": result[i].enddate,
                "title": result[i].title,
                "views": result[i].views,
                "board_uid": result[i].board_uid
               }
        }else{
            integratedData[i] ={
                "recruitType": "✏️ "+result[i].recruitType,
                "Newbread": "🍞 따끈따끈 새 글",
                "enddate": result[i].enddate,
                "title": result[i].title,
                "views": result[i].views,
                "board_uid": result[i].board_uid
               }
        }
        
    };
    return integratedData;
};
// 게시글 작성
const postwrite = async (postData, user_uid) => {
    const enddate = new Date(postData.enddate);
    const today = new Date();

    // 시간을 무시하고 날짜만 비교하기 위해
    enddate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // 입력받은 날짜가 현재 날짜보다 이전인지 확인
    if (enddate < today) {
        throw new Error('마감일 날짜는 현재 날짜보다 이전일 수 없습니다.');
    }
    const result = await postRep.postwrite(postData, user_uid);
    const result2 = await postRep.postwriteuidsearch(postData, user_uid);
    const board_uid = result2;
    for(let i = 0 ; i < postData.categories.length ; i++){

        await postRep.postwritecategories(postData.categories[i],board_uid);
    }
    for(let i = 0 ; i < postData.languages.length ; i++){
        await postRep.postwritelanguages(postData.languages[i],board_uid);
    }
    return board_uid;
};
// 게시글 작성
// const postwrite = async (postData, languages, categories) => {
//     console.log("user_uid",user_uid);
//     const result = await postRep.postwrite(postData, languages, categories);
//     return result;
// }

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
// 권한 확인 함수
async function checkPermission(boardUid, user_uid) {
    const postOwner = await postRep.getPostOwner(boardUid);
    return user_uid === postOwner;
}

module.exports = { postList,detailview,popularList,recruitfieldSerch,Search,
    postwrite, postmodify, postdel, checkPermission };