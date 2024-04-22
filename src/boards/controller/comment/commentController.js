const commentService = require("../../service/comment/commentService");

// 댓글 작성
const cmtwrite = async (req, res) => {
    // 빈칸 제출 확인
    const { comment } = req.body;
    if (!comment) {
        return res.status(400).json({ message: "공백입니다" });
    }
    
    try {
        const boardUid = req.params.board_uid;
        const userUid = req.session.user_uid; // 세션에서 로그인한 사용자의 UID 사용
        const result = await commentService.cmtwrite(boardUid, userUid, comment);
        console.log("result.insertId : ", result.insertId)  // commentId
        console.log("boardUid : ", boardUid);
        res.status(201).json({ message: "댓글이 성공적으로 작성되었습니다.", boardUid });
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 댓글 작성에 실패했습니다.", error: error.message });
    }
}
// 댓글 수정
const cmtmodify = async (req, res) => {
    const { content } = req.body;
    const commentUid = req.params.comment_uid;

    // 필수 항목 확인
    if (!content) {
        return res.status(400).json({ message: "공백입니다" });
    }

    try {
        const result = await commentService.cmtmodify(commentUid, content);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: "수정되었습니다" });
        } else {
            res.status(404).json({ message: "댓글을 찾을 수 없습니다" });
        }
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 인해 수정에 실패했습니다.", error: error.message });
    }
}
// 댓글 삭제
const cmtdel = async (req, res) => {
    const comment_uid = req.params.comment_uid; // URL에서 comment_uid를 추출
    try {
        // 댓글 작성자 확인
        const comment = await commentService.getCommentById(commentUid); // 댓글 정보 가져오기
        if (comment.user_uid !== req.session.user_uid) {
            return res.status(403).json({ message: "작성자만 삭제할 수 있습니다." });
        }

        const result = await commentService.cmtdel(comment_uid, req.session.user_uid);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: "댓글이 성공적으로 삭제되었습니다." });
        } else {
            res.status(404).json({ message: "댓글을 찾을 수 없습니다." });
        }
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 인해 삭제에 실패했습니다.", error: error.message });
    }
}

module.exports = { cmtwrite, cmtmodify, cmtdel };

