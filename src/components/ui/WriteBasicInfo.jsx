import styled from "styled-components";

const WriteBasicInfo1 = () => {
  return (
    <SelectArea>
      <div className="basic-info-title">
        <span className="title1 title">모집 구분</span>
        <span className="title2 title">모집 인원</span>
      </div>
      <div className="select-box">
        <select name="languages" id="lang" className="left-bar">
          <option value="" disabled selected>
            프로젝트/스터디
          </option>
          <option value="">프로젝트</option>
          <option value="">스터디</option>
        </select>
        <select name="languages" id="lang" className="right-bar">
          <option value="" disabled selected>
            인원 미정 ~ 10명 이상
          </option>
          <option value="">1명</option>
          <option value="">2명</option>
          <option value="">3명</option>
          <option value="">4명</option>
          <option value="">5명</option>
          <option value="">6명</option>
          <option value="">7명</option>
          <option value="">8명</option>
          <option value="">9명</option>
          <option value="">10명 이상</option>
        </select>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo2 = () => {
  return (
    <SelectArea>
      <div className="basic-info-title">
        <span className="title1 title">진행 방식</span>
        <span className="title2 title">진행 기간</span>
      </div>
      <div className="select-box">
        <select name="languages" id="lang" className="left-bar">
          <option value="" disabled selected>
            온라인/오프라인
          </option>
          <option value="">온라인</option>
          <option value="">오프라인</option>
        </select>
        <select name="languages" id="lang" className="right-bar">
          <option value="" disabled selected>
            기간 미정 ~ 6개월 이상
          </option>
          <option value="">기간 미정</option>
          <option value="">1개월</option>
          <option value="">2개월</option>
          <option value="">3개월</option>
          <option value="">4개월</option>
          <option value="">5개월</option>
          <option value="">6개월</option>
        </select>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo3 = () => {
  return (
    <SelectArea>
      <div className="basic-info-title">
        <span className="title1 title">기술 스택</span>
        <span className="title2 title">모집 마감일</span>
      </div>
      <div className="select-box">
        <select
          name="languages"
          id="lang"
          class="left-bar"
          onfocus="this.size=3"
          onblur="this.size=1"
          onchange="this.size=1; this.blur();"
        >
          <option value="" disabled selected>
            프로젝트 사용기술
          </option>
          <option value="">spring</option>
          <option value="">react</option>
          <option value="">java</option>
          <option value="">javascript</option>
          <option value="">python</option>
          <option value="">docker</option>
          <option value="">figma</option>
        </select>
        <div>
          <input placeholder="Date" type="date" id="date" />
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo4 = () => {
  return (
    <SelectArea>
      <div className="basic-info-title">
        <span className="title1 title">모집 포지션</span>
        <span className="title2 title">연락 방법</span>
      </div>
      <div className="select-box">
        <select name="languages" id="lang" className="left-bar">
          <option value="" disabled selected>
            프론트엔드, 백엔드...
          </option>
          <option value="">프론트엔드</option>
          <option value="">백엔드</option>
          <option value="">디자이너</option>
          <option value="">PM</option>
        </select>
        <select name="languages" id="lang" className="right-bar">
          <option value="" disabled selected>
            카카오톡 오픈채팅..
          </option>
          <option value="">오픈톡</option>
          <option value="">이메일</option>
          <option value="">구글 폼</option>
        </select>
      </div>
    </SelectArea>
  );
};

export { WriteBasicInfo1, WriteBasicInfo2, WriteBasicInfo3, WriteBasicInfo4 };

const SelectArea = styled.div`
  margin-bottom: 20px;

  .select-box {
    /* border: solid 1px red; */

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  input {
    margin-top: 10px;
    width: 428px;
    height: 55px;
    border-radius: 4px;
    border: 1px solid #555454;
  }

  .left-bar {
    margin-right: 35px;
  }

  .basic-info-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  }

  .title2 {
    position: absolute;
    left: 520px;
  }

  .title {
    font-size: 16px;
    font-weight: 500;
  }

  select {
    width: 486px;
    height: 56px;
    margin-bottom: 10px;
    margin-top: 10px;
    outline: 0;
    border: 1px solid gray;
    padding: 4px;
    border-radius: 4px;
  }

  select option:disabled:first-of-type {
  }
`;
