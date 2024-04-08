import React from "react";
import Const from "../../constants/MainStyle.jsx";
import Nav from "../../components/ui/Nav.jsx";
import Banner from "./Banner.jsx";
import HotBoards from "./HotBoards.jsx";
import NewBoards from "./NewBoards.jsx";
import Footer from "./Footer";
import UpScroll from "./UpScroll.jsx";

const MainPage = () => {
  return (
    <Const className="MainPage">
      <Const />
      <Nav />
      <Banner />
      <HotBoards />
      <NewBoards />
      <Footer />
      <UpScroll />
    </Const>
  );
};

export default MainPage;
