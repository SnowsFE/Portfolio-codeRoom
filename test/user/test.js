jest.mock('../../src/users/repository/memberRepository', () => ({
    findUsername: jest.fn(),
    registory: jest.fn(),
}));

jest.mock('bcrypt', () => ({
    hash: jest.fn(() => 'hashed_password'),
}));

const { registory } = require('../../src/users/service/memberService');
const memberRepository = require('../../src/users/repository/memberRepository');
const bcrypt = require('bcrypt');

describe('memberService', () => {
    beforeEach(() => {
        // 각 테스트가 시작하기 전에 mock 함수들의 구현을 초기화합니다.
        memberRepository.findUsername.mockReset();
        memberRepository.registory.mockReset();
        bcrypt.hash.mockReset();
    });

    it('사용자 이름이 이미 존재할 경우 에러를 발생시킨다', async () => {
        // findUsername이 사용자 객체를 반환하도록 설정합니다. 즉, 사용자 이름이 이미 존재한다는 것을 의미합니다.
        memberRepository.findUsername.mockResolvedValue({ id: 1, username: 'testuser' });

        await expect(registory('testuser', 'password')).rejects.toThrow('이미 존재하는 아이디 입니다.');

        // 사용자 이름이 이미 존재할 경우, registory 함수가 호출되지 않아야 합니다.
        expect(memberRepository.registory).not.toHaveBeenCalled();
    });

    it('새 사용자를 성공적으로 등록할 경우', async () => {
        // findUsername이 null을 반환하도록 설정합니다. 즉, 사용자 이름이 존재하지 않는다는 것을 의미합니다.
        memberRepository.findUsername.mockResolvedValue(null);

        // 사용자 등록(registory) 호출 시 성공적으로 처리되었다고 가정합니다.
        memberRepository.registory.mockResolvedValue({});

        await registory('newuser', 'password');

        // 비밀번호 해싱과 사용자 등록이 호출되었는지 확인합니다.
        expect(bcrypt.hash).toHaveBeenCalledWith('password', 8);
        expect(memberRepository.registory).toHaveBeenCalledWith('newuser', 'hashed_password');
    });
});
