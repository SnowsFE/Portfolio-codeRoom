import React from "react";
import Const from "../../constants/MainStyle.jsx";
import Nav from "../../components/ui/Nav.jsx";
import Banner from "./Banner.jsx";
import HotBoards from "./HotBoards.jsx";
import NewBoards from "./NewBoards.jsx";
import Footer from "./Footer.jsx";

const MainContainer = () => {
  return (
    <Const className="MainContainer">
      <Const />
      <Nav />
      <Banner />
      <HotBoards />
      <NewBoards />
      <Footer />
    </Const>
  );
};

export default MainContainer;
