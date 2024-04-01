import React from 'react';
import styled from "styled-components";
import Nav from "./Nav";

const MainContainer = () => {
    return (
        <Main className="MainContainer">
             <Nav container="" />
        </Main>
    );
}

const Main = styled.div`
    width: 1920px; 
    height: 1080px;
    margin: 0 auto;
`

export default MainContainer;