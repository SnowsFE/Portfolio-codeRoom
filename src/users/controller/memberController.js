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

// 
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await memberService.login(username, password);
        res.json({ message: '로그인 성공', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



module.exports = {register,login};