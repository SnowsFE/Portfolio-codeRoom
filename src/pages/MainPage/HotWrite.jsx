import React, { useState } from 'react';
import styled from "styled-components";

const Hot = (props) => {
    const [views, setViews] = useState([0, 0, 0, 0]);
    const [projects, setProjects] = useState([
        { projectStatus: "🎥 프로젝트", deadlineStatus: "🚨 마감 n일전" },
        { projectStatus: "🎥 프로젝트", deadlineStatus: "🚨 마감 n일전" },
        { projectStatus: "🎥 프로젝트", deadlineStatus: "🚨 마감 n일전" },
        { projectStatus: "🎥 프로젝트", deadlineStatus: "🚨 마감 n일전" }
    ]);

    const handleClick = (index) => {
        const newViews = [...views];
        newViews[index] += 1;
        setViews(newViews);
    };

    const renderHotBox = (index) => {
        const project = projects[index];
        return (
            <HotBox key={index} className={`HotBox${index + 1}`} onClick={() => handleClick(index)}>
                <HotBoxContent>
                    <ProjectStatus>{project.projectStatus}</ProjectStatus>
                    <DeadlineStatus>{project.deadlineStatus}</DeadlineStatus>
                    <HotSubEnd>
                        <strong>마감일 | 2024.04.20</strong>
                    </HotSubEnd>
                    <HotSubMain>
                        <strong>코딩룸 신규 오픈!!</strong>
                    </HotSubMain>
                    <HotView>
                        <p>👀 조회수 {views[index]}회</p>
                    </HotView>
                </HotBoxContent>
            </HotBox>
        );
    };

    return (
        <HotOutLine className="HotOut">
            <HotWrite className="HotWrite">
                <strong>{props.container}🔥 이번주 코드룸 인기글</strong>
            </HotWrite>
            {projects.map((_, index) => renderHotBox(index))}
        </HotOutLine>
    );
}

const HotOutLine = styled.div`
    width: 1300px;
    height: 350px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
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
    margin-bottom: 5px;
    border: 1px solid #8f8f8f;
    border-radius: 20px;
    cursor: pointer;
`;

const HotBoxContent = styled.div`
    width: 82%;
    height: 150px;
    display: inline-block;
    padding: 20px 25px;
    border-radius: 20px;
    background-color: #ffffff;
    margin-top : 3px;
`;

const ProjectStatus = styled.div`
    display: flex;
    width: 35%;
    height: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 20px;
    font-size: 12px;
`;

const DeadlineStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28.37%;
    height : 16px;
    padding: 2px 8px;
    border-radius: 20px;
    border: 1px solid rgb(234, 114, 111);
    color: rgb(234, 114, 111);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: -0.56px;
    border-radius: 20px;
    margin-left: 63%;
    margin-top: -22px;
`;

const HotSubEnd = styled.div`
    font-size: 14px;
    text-align: left;
    margin-top: 10%;
    color: #ff0000;
`;

const HotSubMain = styled.div`
    max-width: 242px;
    font-size: 18px;
    text-align: left;
    margin-top: 3.5%;
`;

const HotView = styled.div`
    font-size: 15px;
    margin-left: 53%;
    margin-top: 10%;
    overflow: hidden;
`;

export default Hot;