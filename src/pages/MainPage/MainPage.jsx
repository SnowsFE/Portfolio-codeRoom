import React from 'react';
import Const from '../../const/MainStyle.jsx';
import Nav from "../../components/ui/Nav.jsx";
import Banner from "./Banner.jsx";
import Hot from './HotWrite.jsx';

const MainContainer = () => {
    return (
        <Const className="MainContainer">
             <Const container=""/>
             <Nav container="" />
             <Banner container=""/>
             <Hot container=""/>
        </Const>
    );
}

export default MainContainer;
