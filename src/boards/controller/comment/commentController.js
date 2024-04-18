

const commentService = require("../../service/comment/commentService");


// 댓글 작성
const write = async (req, res) => {
    // // 로그인 상태 확인
    // if (!req.session.user) {
    //     return res.status(401).json({ message: "로그인이 필요합니다." });
    // }

    // 빈칸 제출 확인
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: "공백입니다" });
    }

    try {
        const boardUid = req.params.board_uid;
        const userUid = req.params.user_uid; // URL 경로에서 사용자 UID를 받아옴
        //const userUid = req.session.user.uid; // 로그인한 사용자의 UID
        const result = await commentService.write(boardUid, userUid, content);
        res.status(201).json({ message: "댓글이 성공적으로 작성되었습니다.", commentId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 댓글 작성에 실패했습니다.", error: error.message });
    }
}

// 댓글 수정
const modify = async (req, res) => {
    const { content } = req.body;
    const commentUid = req.params.comment_uid;

    // 필수 항목 확인
    if (!content) {
        return res.status(400).json({ message: "공백입니다" });
    }

    try {
        const result = await commentService.modify(commentUid, content);
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
const del = async (req, res) => {
    const { comment_uid, user_uid } = req.params; // URL에서 user_uid와 comment_uid를 추출
    try {
        const result = await commentService.del(comment_uid, user_uid);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: "댓글이 성공적으로 삭제되었습니다." });
        } else {
            res.status(404).json({ message: "댓글을 찾을 수 없습니다." });
        }
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 인해 삭제에 실패했습니다.", error: error.message });
    }
}

module.exports = { write, modify, del, detailview };
