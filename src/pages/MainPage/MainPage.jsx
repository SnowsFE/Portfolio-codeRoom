import React from 'react';
import Const from '../../constants/MainStyle.jsx';
import Nav from "../../components/ui/Nav.jsx";
import Banner from "./Banner.jsx";
import HotBoards from './HotBoards.jsx';
import NewBoards from './NewBoards.jsx';

const MainContainer = () => {
    return (
        <Const className="MainContainer">
             <Const container=""/>
             <Nav container="" />
             <Banner container=""/>
             <HotBoards container=""/>
             <NewBoards container=""/>
        </Const>
    );
}

export default MainContainer;
