const express = require("express");
const router = express.Router();

const memberCtrl = require("../users/controller/memberController");
router.post("/users/join", memberCtrl.register);        // 회원가입
router.post("/users/login", memberCtrl.login);          // 로그인
router.get("/users/:user_uid", memberCtrl.info);        // 회원정보 조회
router.put("/users/:user_uid", memberCtrl.modify);      // 회원정보 수정
router.delete("/users/:user_uid", memberCtrl.del);      // 회원 탈퇴
router.get('/users/:user_uid/mypage', memberCtrl.myPage);// 마이페이지 접근
router.post("/users/checkDuplicate",memberCtrl.checkDuplicate);
router.post("/users/join", memberCtrl.register);
router.post("/users/login", memberCtrl.login);

const postCtrl = require("../boards/controller/post/postController");
router.post("/boards/write", postCtrl.write);                 // 게시글 작성
router.put("/boards/:board_uid", postCtrl.modify);      // 게시글 수정
router.delete("/boards/:board_uid", postCtrl.del);      // 게시글 삭제
//router.get("/boards/search", postCtrl.search);          // 게시글 검색

router.get("/boards", postCtrl.postList);
router.get("/boards/:board_uid", postCtrl.detailview);
router.get("/boards/recruitfield/:recruitfield",postCtrl.recruitfieldSerch);
router.get("/boards/search/:searchWord",postCtrl.Search);

const commentCtrl = require("../boards/controller/comment/commentController");
router.post("/boards/:board_uid/:user_uid", commentCtrl.write);                 // 댓글 작성
router.put("/boards/:board_uid/:user_uid/:comment_uid", commentCtrl.modify);    // 댓글 수정
router.delete("/boards/:board_uid/:user_uid/:comment_uid", commentCtrl.del);    // 댓글 삭제

module.exports = router;