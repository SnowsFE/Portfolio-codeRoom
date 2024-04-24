const express = require("express");
const router = express.Router();

// 로그인 상태 확인
const isAuthenticated = (req, res, next) => {
  if (req.session.user_uid) {
    console.log("세션 확인 로그", req.session.user_uid);
    return next();
  } else {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
};
const memberCtrl = require("../users/controller/memberController");
router.post("/users/join", memberCtrl.register); // 회원가입
router.post("/users/login", memberCtrl.login); // 로그인
router.post("/users/logout", isAuthenticated, memberCtrl.logout); // 로그아웃
router.get("/users/info", isAuthenticated, memberCtrl.info); // 회원정보 조회
router.put("/users/update", isAuthenticated, memberCtrl.pwdChange); // 비밀번호 변경
router.delete("/users/delete", isAuthenticated, memberCtrl.userdel); // 회원 탈퇴
router.get("/users/mypage", isAuthenticated, memberCtrl.myPage); // 마이페이지 접근
router.post("/users/checkDuplicate", memberCtrl.checkDuplicate); // 중복검사

const postCtrl = require("../boards/controller/post/postController");
router.post("/boards/postWrite", isAuthenticated, postCtrl.postwrite); // 게시글 작성
router.put(
  "/boards/postmodify/:board_uid",
  isAuthenticated,
  postCtrl.postmodify
); // 게시글 수정
router.delete("/boards/postDel/:board_uid", isAuthenticated, postCtrl.postdel); // 게시글 삭제

router.get("/boards", postCtrl.postList); // 게시글 목록 조회
router.get("/boards/:board_uid", postCtrl.detailview); // 게시글 상세 조회
router.get("/boards/recruitfield/:recruitfield", postCtrl.recruitfieldSerch); // 모집 분야별 탭
router.get("/boards/search/:searchWord", postCtrl.Search); // 게시글 검색

const commentCtrl = require("../boards/controller/comment/commentController");
router.post("/boards/:board_uid", isAuthenticated, commentCtrl.cmtwrite); // 댓글 작성
router.put(
  "/boards/:board_uid/:comment_uid",
  isAuthenticated,
  commentCtrl.cmtmodify
); // 댓글 수정
router.delete(
  "/boards/:board_uid/:comment_uid",
  isAuthenticated,
  commentCtrl.cmtdel
); // 댓글 삭제
module.exports = router;
