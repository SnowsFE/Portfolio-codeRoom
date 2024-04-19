const express = require('express');
const app = express();
const router = require("./src/router/router");
const exp = require("constants");
const bodyParser = require("body-parser");

const session = require('express-session');

app.use(session({
  secret: '비밀키', // 세션을 암호화하기 위한 비밀키
  resave: false, // 세션을 항상 저장할 지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 저장
  cookie: {
    secure: true, // https에서만 세션 정보를 주고받도록 설정
    maxAge: 1000 * 60 * 60, // 쿠키 유효시간 1시간
    httpOnly: true, // 클라이언트에서 쿠키를 확인하지 못하도록 설정
  }
}));


// 요청 본문 파싱을 위한 미들웨어 추가
app.use(express.json()); // JSON 형태의 요청 본문을 파싱
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱

app.use('/', router);

app.listen(8080, () =>  console.log(`Server is running on 8080`) );
