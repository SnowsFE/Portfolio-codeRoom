import React, { useState } from 'react';
import styled from "styled-components";

const NewBoards = (props) => {
    const [views, setViews] = useState([0, 0, 0, 0]);
    const [projects, setProjects] = useState([
        { projectStatus: "🎥 프로젝트", NewStatus: "🍞 따끈따끈 새 글" },
        { projectStatus: "🎥 프로젝트", NewStatus: "🍞 따끈따끈 새 글" },
        { projectStatus: "🎥 프로젝트", NewStatus: "🍞 따끈따끈 새 글" },
        { projectStatus: "🎥 프로젝트", NewStatus: "🍞 따끈따끈 새 글" }
    ]);

    const handleClick = (index) => {
        const newViews = [...views];
        newViews[index] += 1;
        setViews(newViews);
    };

    const renderNewBox = (index) => {
        const project = projects[index];
        return (
            <NewBox key={index} className={`NewBox${index + 1}`} onClick={() => handleClick(index)}>
                <NewBoxContent>
                    <ProjectStatus>{project.projectStatus}</ProjectStatus>
                    <NewStatus>{project.NewStatus}</NewStatus>
                    <NewSubEnd>
                        <strong>마감일 | 2024.04.20</strong>
                    </NewSubEnd>
                    <NewSubMain>
                        <strong>코딩룸 신규 오픈!!</strong>
                    </NewSubMain>
                    <NewView>
                        <p>👀 조회수 {views[index]}회</p>
                    </NewView>
                </NewBoxContent>
            </NewBox>
        );
    };

    return (
        <NewOutLine className="NewOut">
            <NewWrite className="NewWrite">
                <strong>{props.container}🍞 최근에 올라왔어요 </strong>
            </NewWrite>
            {projects.map((_, index) => renderNewBox(index))}
        </NewOutLine>
    );
}

const NewOutLine = styled.div`
    width: 1300px;
    height: 350px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

const NewWrite = styled.div`
    font-size: 26px;
    position: absolute;
    left: 12.1%;
    margin-bottom: 13.5%;
    transform: translateX(-50%);
`;
const NewBox = styled.div`
    width: 294px;
    height: 199px;
    margin-top: 9%;
    margin-bottom: 5px;
    border: 1px solid #8f8f8f;
    border-radius: 20px;
    cursor: pointer;
`;

const NewBoxContent = styled.div`
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

const NewStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height : 16px;
    padding: 2px 8px;
    border-radius: 20px;
    border : 1px solid #ffd900;
    color: #fdb900;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: -0.56px;
    border-radius: 20px;
    margin-left: 57%;
    margin-top: -22px;
`;

const NewSubEnd = styled.div`
    font-size: 14px;
    text-align: left;
    margin-top: 10%;
    color: #ff0000;
`;

const NewSubMain = styled.div`
    max-width: 242px;
    font-size: 18px;
    text-align: left;
    margin-top: 3.5%;
`;

const NewView = styled.div`
    font-size: 15px;
    margin-left: 53%;
    margin-top: 10%;
    overflow: hidden;
`;

export default NewBoards;