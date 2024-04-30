import React, { useState } from "react";
import styled from "styled-components";

// 각 아이콘 이미지 파일 import
import awsIcon from "../../img/icon/Aws.svg";
import cIcon from "../../img/icon/C.svg";
import djangoIcon from "../../img/icon/Django.svg";
import dockerIcon from "../../img/icon/Docker.svg";
import expressIcon from "../../img/icon/Express.svg";
import figmaIcon from "../../img/icon/Figma.svg";
import firebaseIcon from "../../img/icon/Firebase.svg";
import flutterIcon from "../../img/icon/Flutter.svg";
import gitIcon from "../../img/icon/Git.svg";
import goIcon from "../../img/icon/Go.svg";
import graphqlIcon from "../../img/icon/GraphQL.svg";
import javaIcon from "../../img/icon/Java.svg";
import javascriptIcon from "../../img/icon/JavaScript.svg";
import jestIcon from "../../img/icon/Jest.svg";
import kotlinIcon from "../../img/icon/Kotlin.svg";
import kubernetesIcon from "../../img/icon/Kubernetes.svg";
import mongodbIcon from "../../img/icon/MongoDB.svg";
import mysqlIcon from "../../img/icon/MySQL.svg";
import nestjsIcon from "../../img/icon/NestJS.svg";
import nextjsIcon from "../../img/icon/Next.js.svg";
import nodejsIcon from "../../img/icon/Node.js.svg";
import phpIcon from "../../img/icon/PHP.svg";
import pythonIcon from "../../img/icon/Python.svg";
import reactIcon from "../../img/icon/React.svg";
import reactnativeIcon from "../../img/icon/React Native.svg";
import springIcon from "../../img/icon/Spring.svg";
import svelteIcon from "../../img/icon/Svelte.svg";
import swiftIcon from "../../img/icon/Swift.svg";
import typescriptIcon from "../../img/icon/TypeScript.svg";
import unityIcon from "../../img/icon/Unity.svg";
import vueIcon from "../../img/icon/Vue.svg";
import zeplinIcon from "../../img/icon/Zeplin.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <SkillModalOverlay onClick={onClose}>
      <SkillModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>닫기</button>
      </SkillModalContent>
    </SkillModalOverlay>
  );
};

const Skill = () => {
  const [selectedJob, setSelectedJob] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // 각 직무에 대응하는 기술 스택 및 아이콘 이미지 파일
  const jobToSkills = {
    프론트엔드: [
      { name: "JavaScript", icon: javascriptIcon },
      { name: "React", icon: reactIcon },
      { name: "Vue", icon: vueIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Next.js", icon: nextjsIcon },
      { name: "Svelte", icon: svelteIcon },
      { name: "Swift (웹앱)", icon: swiftIcon },
      { name: "React Native (모바일)", icon: reactnativeIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Zeplin", icon: zeplinIcon },
    ],
    백엔드: [
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express", icon: expressIcon },
      { name: "Django", icon: djangoIcon },
      { name: "Spring", icon: springIcon },
      { name: "Java", icon: javaIcon },
      { name: "Go", icon: goIcon },
      { name: "PHP", icon: phpIcon },
      { name: "Python", icon: pythonIcon },
      { name: "NestJS", icon: nestjsIcon },
      { name: "GraphQL", icon: graphqlIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "Firebase", icon: firebaseIcon },
    ],
    디자이너: [
      { name: "Figma", icon: figmaIcon },
      { name: "Zeplin", icon: zeplinIcon },
      { name: "Unity (게임 디자인)", icon: unityIcon },
    ],
    기획자: [
      { name: "Figma", icon: figmaIcon },
      { name: "Zeplin", icon: zeplinIcon },
    ],
    기타: [
      { name: "AWS", icon: awsIcon },
      { name: "Git", icon: gitIcon },
      { name: "C", icon: cIcon },
      { name: "Kotlin", icon: kotlinIcon },
      { name: "Flutter", icon: flutterIcon },
      { name: "Jest", icon: jestIcon },
    ],
  };

  // 기술 스택 버튼 클릭 핸들러
  const handleJobClick = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  return (
    <SkillContainer clasName="Skillcontainer">
      {/* 기술 스택 버튼 */}
      <SkillJobButtonSkillContainer>
        {Object.keys(jobToSkills).map((job) => (
          <SkillJobButton key={job} onClick={() => handleJobClick(job)}>
            {job}
          </SkillJobButton>
        ))}
      </SkillJobButtonSkillContainer>
      {/* 모달 */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div>{selectedJob}</div>
        <div>
          {/* 선택된 직무에 대응하는 기술 스택 아이콘 표시 */}
          {jobToSkills[selectedJob]?.map((skill, index) => (
            <SkillItem key={index}>
              {skill.icon && <img src={skill.icon} alt={skill.name} />}
              <span>{skill.name}</span>
            </SkillItem>
          ))}
        </div>
      </Modal>
    </SkillContainer>
  );
};

// SkillContainer 스타일드 컴포넌트: 위치 및 크기 설정
const SkillContainer = styled.div`
  position: absolute; /* 위치 설정 */
  width: 31%; /* 너비 설정 */
  height: 10%; /* 높이 설정 */
  margin-bottom: 20.6%; /* 하단 여백 */
  margin-left: 68.8%; /* 왼쪽 여백 */
  z-index: 3; /* z-index 설정 */
`;

// SkillJobButtonSkillContainer 스타일드 컴포넌트
const SkillJobButtonSkillContainer = styled.div``;

// SkillJobButton 스타일드 컴포넌트: 작업 버튼 스타일
const SkillJobButton = styled.button`
  margin: 5px; /* 마진 설정 */
  padding: 10px; /* 안쪽 여백 설정 */
  background-color: #ffffff; /* 배경색 설정 */
  border: 1px solid #8f8f8f; /* 테두리 스타일과 색상 설정 */
  border-radius: 10px;
  cursor: pointer; /* 커서 설정 */
  font-family: "Noto Sans KR", sans-serif; /* 폰트 패밀리 설정 */
  font-weight: 700;

  &:hover {
    background-color: #ebebeb; /* 약간 회색 톤으로 변경 */
    transform: scale(1.08);
  }
`;

// SkillModalOverlay 스타일드 컴포넌트: 모달 오버레이 스타일
const SkillModalOverlay = styled.div`
  position: fixed; /* 위치 설정 */
  top: 0; /* 위쪽 여백 설정 */
  left: 0; /* 왼쪽 여백 설정 */
  width: 100%; /* 너비 설정 */
  height: 100%; /* 높이 설정 */
  background-color: rgba(0, 0, 0, 0.5); /* 배경색 설정 */
  display: flex; /* 플렉스 디스플레이 설정 */
  align-items: center; /* 수직 정렬 설정 */
  justify-content: center; /* 수평 정렬 설정 */
`;

// SkillModalContent 스타일드 컴포넌트: 모달 내용 스타일
const SkillModalContent = styled.div`
  background-color: white; /* 배경색 설정 */
  padding: 20px 40px; /* 안쪽 여백 설정 */
  border-radius: 8px; /* 테두리 반경 설정 */
  display: flex; /* 플렉스 디스플레이 설정 */
  flex-direction: column; /* 컬럼 방향 설정 */
  align-items: center; /* 수직 정렬 설정 */
  justify-content: space-between; /* 요소 사이의 공간 분배 설정 */

  button {
    margin-top: 10px; /* 버튼 상단 여백 설정 */
  }
`;

// SkillItem 스타일드 컴포넌트: 스킬 항목 스타일
const SkillItem = styled.div`
  display: flex; /* 플렉스 디스플레이 설정 */
  align-items: center; /* 수직 정렬 설정 */
  margin: 10px 0; /* 마진 설정 */

  img {
    width: 24px; /* 너비 설정 */
    height: 24px; /* 높이 설정 */
    margin-right: 10px; /* 오른쪽 마진 설정 */
  }
`;

export default Skill;
