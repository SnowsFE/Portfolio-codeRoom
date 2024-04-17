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
const login = async (username, password) => {
    const user = await memberRep.findUsername(username);
    if (!user) throw new Error('존재하지 않는 아이디 입니다.');

    const isMatch = await bcrypt.compare(password, user.pwd);
    if (!isMatch) throw new Error('비밀번호가 틀립니다.');

    return user; // 로그인 성공
};

// 회원 정보 기능
const info = async (user_uid) => {

}

module.exports = { register, login, info };