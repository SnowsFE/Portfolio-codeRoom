import React, { useState } from 'react';
import styled from "styled-components";

const Hot = (props) => {

    const [views, setViews] = useState(0);
    const handleClick = () => {
        setViews(views + 1);
    };

    return(
        <HotOutLine className="HotOut">
            <HotWrite className="HotWrite">
                <strong>{props.container}🔥 이번주 코드룸 인기글</strong>
            </HotWrite>
            <HotBox1 className="HotBox1" onClick={handleClick}>
                <HotBox1_1 className="HotBox1_1">
                    <HotBox1_2 className="HotBox1_2">
                        🎥 프로젝트
                    </HotBox1_2>
                    <HotBox1_3 className="HotBox1_3">
                        🚨 마감 n일전
                    </HotBox1_3>
                    <HotSubEnd className="HotSubWrite">
                        <strong>마감일 | 2024.04.20</strong>
                    </HotSubEnd>
                    <HotSubMain className="HotSubMain">
                        <strong>코딩룸 신규 오픈!!</strong>
                    </HotSubMain>
                    <HotView>
                        <p>👀 조회수 {views}회</p>
                    </HotView>
                </HotBox1_1>
            </HotBox1>
            <HotBox2 className="HotBox2"></HotBox2>
            <HotBox3 className="HotBox3"></HotBox3>
            <HotBox4 className="HotBox4"></HotBox4>
        </HotOutLine>
    );
}

const HotOutLine = styled.div`
    width: 1300px;
    height: 350px;
    position : relative;
    margin: 0 auto; /* 수평 중앙 정렬을 위해 margin을 auto로 설정 */
    display: flex;
    justify-content: center;
    align-items: center; /* 수직 중앙 정렬 */
    gap: 25px; /* 박스들 사이의 간격을 5px로 설정 */
`;


const HotWrite = styled.div`
    font-size: 26px;
    position: absolute;
    left: 12.8%;
    margin-bottom: 13.5%;
    transform: translateX(-50%);
`;

const HotBox = styled.div`
    width: 294px;
    height: 199px;
    margin-top: 9%;
    margin-bottom: 5px; /* 각 박스들 간격을 5px로 설정 */
    border: 1px solid #8f8f8f;
    border-radius: 20px;
    cursor : pointer;
`;

const HotBox1_1 = styled.div`
    width: 82%;
    height : 150px;
    display: inline-block;
    padding : 20px 25px;
    gap : 10px;
    border-radius : 20px;
    margin-top : 2px;
    background-color : #ffffff;
`

const HotBox1_2 = styled.div`
    display : flex;
    width : 35%;
    height: 19px;
    justify-content: center;
    align-items: center;
    border : 1px solid gray;
    border-radius : 20px;
    font-size : 12px;
`

const HotBox1_3 = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    width : 28.37%;
    padding: 2px 8px;
    border-radius: 20px;
    border: 1px solid rgb(234, 114, 111);
    color: rgb(234, 114, 111);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: -0.56px;
    border-radius : 20px;
    margin-left : 63%;
    margin-top : -21px;
`

const HotSubEnd = styled.div`
    font-size : 14px;
    text-align : left;
    margin-top : 10%;
    color : #ff0000;
`

const HotSubMain = styled.div`
    max-width : 242px;
    font-size : 18px;
    text-align : left;
    margin-top : 3.5%;
`

const HotView = styled.div`
    font-size : 15px;
    margin-left : 53%;
    margin-top : 10%;
    overflow : hidden;
`

const HotBox1 = styled(HotBox)``;
const HotBox2 = styled(HotBox)``;
const HotBox3 = styled(HotBox)``;
const HotBox4 = styled(HotBox)``;

export default Hot;