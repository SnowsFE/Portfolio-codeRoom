import React, { useState } from "react";
import styled from "styled-components";

// 각 아이콘 이미지 파일 import
import awsIcon from "../../img/icon/aws.svg";
import cIcon from "../../img/icon/c.svg";
import djangoIcon from "../../img/icon/django.svg";
import dockerIcon from "../../img/icon/docker.svg";
import expressIcon from "../../img/icon/express.svg";
import figmaIcon from "../../img/icon/figma.svg";
import firebaseIcon from "../../img/icon/firebase.svg";
import flutterIcon from "../../img/icon/flutter.svg";
import gitIcon from "../../img/icon/git.svg";
import goIcon from "../../img/icon/go.svg";
import graphqlIcon from "../../img/icon/graphql.svg";
import javaIcon from "../../img/icon/java.svg";
import javascriptIcon from "../../img/icon/javascript.svg";
import jestIcon from "../../img/icon/jest.svg";
import kotlinIcon from "../../img/icon/kotlin.svg";
import kubernetesIcon from "../../img/icon/kubernetes.svg";
import mongodbIcon from "../../img/icon/mongodb.svg";
import mysqlIcon from "../../img/icon/mysql.svg";
import nestjsIcon from "../../img/icon/nestjs.svg";
import nextjsIcon from "../../img/icon/nextjs.svg";
import nodejsIcon from "../../img/icon/nodejs.svg";
import phpIcon from "../../img/icon/php.svg";
import pythonIcon from "../../img/icon/python.svg";
import reactIcon from "../../img/icon/react.svg";
import reactnativeIcon from "../../img/icon/reactnative.svg";
import springIcon from "../../img/icon/spring.svg";
import svelteIcon from "../../img/icon/svelte.svg";
import swiftIcon from "../../img/icon/swift.svg";
import typescriptIcon from "../../img/icon/typescript.svg";
import unityIcon from "../../img/icon/unity.svg";
import vueIcon from "../../img/icon/vue.svg";
import zeplinIcon from "../../img/icon/zeplin.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalOverlay>
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
    <Container clasName="container">
      {/* 기술 스택 버튼 */}
      <JobButtonContainer>
        {Object.keys(jobToSkills).map((job) => (
          <JobButton key={job} onClick={() => handleJobClick(job)}>
            {job}
          </JobButton>
        ))}
      </JobButtonContainer>
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
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 30%;
  height: 10%;
  margin-bottom: 20.6%;
  margin-left: 69.6%;
  z-index: 3;
`;

const JobButtonContainer = styled.div``;

const JobButton = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgb(152, 255, 138); /* 초록색 그림자 */
  border: none; /* border 제거 */
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    margin-top: 10px;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export default Skill;
