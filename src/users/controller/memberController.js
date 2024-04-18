const memberService = require("../service/memberService");

// 회원가입 기능
const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await memberService.register(username, password);
        res.json({ message: '회원 가입 완료' , result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// 로그인 기능
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await memberService.login(username, password, req);
        res.json({ message: '로그인 성공', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 회원 정보 조회 기능
const info = async (req, res) => {
    try {
        const user_uid = req.params.user_uid;
        const user = await memberService.info(user_uid, req);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// 회원 정보 수정 기능
const modify = async (req, res) => {
    try{
        const { currentPassword, newPassword, confirmPassword } = req.body;
        const user_uid = req.params.user_uid;
        if(newPassword !== confirmPassword) {
            return res.status(400).json({ message: '새로 입력한 두 비밀번호가 일치하지 않습니다.'});
        }
        const result = await memberService.modify(user_uid, currentPassword, newPassword);
        res.json({ message: '비밀번호 변경 완료', result});
    } catch(error) {
        res.status(500).json({ message: error.message});
    }
}

// 회원 탈퇴 기능
const del = async (req, res) => {
    try{
        const user_uid = req.params.user_uid;
        const result = await memberService.del(user_uid);
        if(result) {
            res.json({ message: '회원 탈퇴가 완료되었습니다.'});
        } else {
            res.status(400).json({ message: '회원 탈퇴에 실패했습니다.'});
        }
    } catch(error) {
        res.status(500).json({ message: error.message});
    }
}

// 마이페이지 기능
const myPage = async (req, res) => {
    try {
        const data = await memberService.myPage(req.params.user_uid);
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { register, login, info, modify, del, myPage };
