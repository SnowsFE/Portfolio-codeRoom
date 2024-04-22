const memberRep = require("../repository/memberRepository");
const bcrypt = require("bcrypt");

// 회원가입 기능
const register = async (username, password) => {
    if (!username || !password) {
        throw new Error('사용자 이름과 비밀번호는 필수입니다.');
    }
    if (password.length < 8) {
        throw new Error('비밀번호는 최소 8자 이상이어야 합니다.');
    }
    const user = await memberRep.findUsername(username);
    if (user) throw new Error('이미 존재하는 아이디 입니다.');
    
    const hashedPassword = await bcrypt.hash(password, 8);
    await memberRep.register(username, hashedPassword);
};
// 로그인 기능
const login = async (username, password, req) => {
    const user = await memberRep.findUsername(username);
    if (!user) throw new Error('존재하지 않는 아이디 입니다.');

    const isMatch = await bcrypt.compare(password, user.pwd);
    if (!isMatch) throw new Error('비밀번호가 틀립니다.');

    // 로그인 성공 시 세션에 사용자 ID 저장
    req.session.user_uid = user.user_uid;
    console.log("session",req.session);
    await req.session.save(); // 세션 정보 업데이트

    return user; // 로그인 성공
};
// 중복 확인 기능
const checkDuplicate = async (username) => {
    const user = await memberRep.findUsername(username);
    if (user) {throw new Error('이미 존재하는 아이디 입니다.');
    }else{
        return "사용가능한 이름입니다";
    }
};

// 회원 정보 조회 기능
const info = async (user_uid) => {
    const user = await memberRep.info(user_uid);
    if (!user) {
        throw new Error('사용자를 찾을 수 없습니다.');
    }
    return user;
}
// 비밀번호 변경 기능
const pwdChange = async(user_uid, currentPassword, newPassword) =>{
    const user = await memberRep.info(user_uid);
    if(!user) {
        throw new Error('사용자를 찾을 수 없습니다.');
    }
    const isMatch = await bcrypt.compare(currentPassword, user.pwd);
    if(!isMatch) throw new Error('현재 비밀번호가 맞지 않습니다.');
    
    if (newPassword.length < 8) {
        throw new Error('비밀번호는 최소 8자 이상이어야 합니다.');
    }
    const hashedPassword = await bcrypt.hash(newPassword, 8);
    await memberRep.pwdChange(user_uid, hashedPassword);
}
// 회원 탈퇴 기능
const userdel = async (user_uid) => {
    const result = await memberRep.userdel(user_uid);
    return result;
}

// 마이페이지 기능 (사용자의 게시글과 댓글 정보 조회)
const myPage = async (user_uid) => {
    let commentsInfo = [];
    
    const result = await memberRep.userInfo(user_uid);
    const result2 = await memberRep.myPostsCount(user_uid);
    const result3 = await memberRep.myCommentsCount(user_uid);
    const postsIofo = await memberRep.myPosts(user_uid);
    const result5 = await memberRep.myComments(user_uid);
    for(let i = 0 ; i < result5.length ; i++){
        const result6 = await memberRep.myCommentsAdd(result5[i].board_uid);
        commentsInfo[i] = {"title": result6.result2[0].title, "Count": result6.result[0].Count, "createdate": result5[i].createdate,"board_uid": result5[i].board_uid};
    }
    const integratedData2 = {
        "userInfo":[{"username": result[0].username, "joindate": result[0].joindate, "PostsCount": result2[0].Count, "commentsCount": result3[0].Count}],
        postsIofo,commentsInfo
    };
    return integratedData2;
};

module.exports = { register, login, info, pwdChange, userdel, myPage,checkDuplicate };

