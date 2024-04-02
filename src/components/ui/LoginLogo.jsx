import styled from "styled-components";
import CodeRoom from "../../img/CodeRoom.png";
import CodeRoomBanner from "../../img/CodeRoomBanner.png";
import { useNavigate } from "react-router-dom";

const LoginLogo = () => {
  const navigator = useNavigate();

  return (
    <div>
      <Img src={CodeRoom} alt="" onClick={() => navigator("/")} />
    </div>
  );
};

const BelowImg = () => {
  return <StyledBelowImg src={CodeRoomBanner} alt="" className="footerImg" />;
};

const Img = styled.img`
  width: 120px;
  height: 50px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const StyledBelowImg = styled.img`
  margin-top: 40px;
  width: 800px;
`;

export { LoginLogo, BelowImg };