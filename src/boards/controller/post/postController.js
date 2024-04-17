const postService = require("../../service/post/postService");

// 게시글 작성
const write = async (req, res) => {
    try {
        const postData = req.body;
        const languages = Array.isArray(req.body.languages) ? req.body.languages : []; // 클라이언트로부터 받은 언어 배열
        const categories = Array.isArray(req.body.categories) ? req.body.categories : []; // 클라이언트로부터 받은 분야 배열
        // 필수 항목 검사
        const requiredFields = ['title', 'content', 'startdate', 'enddate', 'recruittype', 'progress', 'recruitmember', 'plan', 'duration', 'contact', 'user_uid'];
        for (const field of requiredFields) {
            if (!postData[field]) {
                return res.status(400).json({ message: `${field}공백입니다` });
            }
        }
        const result = await postService.write(postData, languages, categories);
        res.status(201).json({ message: "게시글이 성공적으로 생성되었습니다.", postId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 게시글 작성에 실패했습니다.", error: error.message });
    }
}

// 게시글 수정
const modify = async (req, res) => {
    try {
        const boardUid = req.params.board_uid;
        const postData = req.body;
        const languages = Array.isArray(req.body.languages) ? req.body.languages : [];
        const categories = Array.isArray(req.body.categories) ? req.body.categories : [];

        // 필수 항목 검사
        const requiredFields = ['title', 'content', 'startdate', 'enddate', 'recruittype'];
        for (const field of requiredFields) {
            if (!postData[field]) {
                return res.status(400).json({ message: `${field} 공백입니다` });
            }
        }
        const result = await postService.modify(boardUid, postData, languages, categories);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
        }
        res.status(200).json({ message: "수정 되었습니다" });
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 게시글 수정에 실패했습니다.", error: error.message });
    }
}


// 게시글 삭제
const del = async (req, res) => {
    try {
        const boardUid = req.params.board_uid;
        const result = await postService.del(boardUid);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
        }
        res.status(200).json({ message: "게시글이 삭제되었습니다.", success: true });
    } catch (error) {
        res.status(500).json({ message: "서버 오류로 게시글 삭제에 실패했습니다.", error: error.message });
    }
}


module.exports = { write, modify, del }