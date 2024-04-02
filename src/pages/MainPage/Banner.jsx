import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoomBanner.png"

const Banner = () => {
    return(
        <BanStyle className='banner'>
            <img src={CodeRoomBanner}></img>
        </BanStyle>
    );
}

const BanStyle = styled.div`
    width : 67.7%;
    height : 335px;
    margin: 0 auto; /* 가운데 정렬 */
    display: flex;
    justify-content: center; /* 가로 방향으로 중앙 정렬합니다. */
    align-items: center; /* 세로 방향으로 중앙 정렬합니다. */
    border-radius : 15px;
    overflow : hidden;
`


export default Banner;
