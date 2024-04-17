const cmtSer = require("../../service/comment/commentService");

const detailview = async (req, res) => {
    
    try {
        console.log("댓글 상세조회 실행");
        const result = await cmtSer.detailview(req.params.board_uid);      
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {detailview};