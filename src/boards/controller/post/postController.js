const postSer = require("../../service/post/postService");
const cmtSer = require("../../service/comment/commentService");

const postList = async (req, res) => {
    
    try {
        console.log("목록조회 실행");
        const popularResult = await postSer.popularList();    
        const mainResult = await postSer.postList();
        res.status(200).json({popularResult,mainResult});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const detailview = async (req, res) => {
    
    try {
        console.log("상세조회 실행");
        const postresult = await postSer.detailview(req.params.board_uid);
        const cmtresult = await cmtSer.detailview(req.params.board_uid);      
        res.status(200).json({postresult,cmtresult});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const recruitfieldSerch = async (req, res) =>{
    try {
        console.log("모집분야별 실행");
        const result = await postSer.recruitfieldSerch(req.params.recruitfield);      
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const Search = async (req, res)=>{ 
    try {
        console.log("검색기능 실행");
        const result = await postSer.Search(req.params.searchWord);      
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {postList,detailview,recruitfieldSerch,Search};