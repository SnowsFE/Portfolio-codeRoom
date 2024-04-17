const express = require("express");
const router = express.Router();
const postCtrl = require("../boards/controller/post/postController");
const memberCtrl = require("../users/controller/memberController");
const cmtCtrl = require("../boards/controller/comment/commentController");

router.get("/boards", postCtrl.postList);
router.get("/boards/:board_uid", postCtrl.detailview);
router.post("/users/join", memberCtrl.register);
router.post("/users/login", memberCtrl.login);
router.get("/boards/recruitfield/:recruitfield",postCtrl.recruitfieldSerch);
router.get("/boards/search/:searchWord",postCtrl.Search);
module.exports = router;